package com.serviciosya.security;

import java.nio.charset.StandardCharsets;
import java.util.List;
import java.net.URLEncoder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.serviciosya.security.dto.AuthRequest;
import com.serviciosya.security.dto.EmpleadoDTO;
import com.serviciosya.security.dto.EmpleadorDTO;
import com.serviciosya.security.dto.UsuarioDTO;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private static final Logger logger = LoggerFactory.getLogger(CustomUserDetailsService.class);

    private final RestTemplate restTemplate = new RestTemplate();

    private final String USER_SERVICE_LOGIN_URL = "http://localhost:8080/auth/login";
    private final String EMPLEADO_SERVICE_REGISTER_URL = "http://localhost:8080/auth/registrar-empleado";
    private final String EMPLEADOR_SERVICE_REGISTER_URL = "http://localhost:8080/auth/registrar-empleador";
    private final String USER_SERVICE_EMAIL_URL = "http://localhost:8080/auth/email/{email}";

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        try {
            logger.info("Buscando usuario por email: {}", email);
            ResponseEntity<UsuarioDTO> response = restTemplate.getForEntity(
                USER_SERVICE_EMAIL_URL, UsuarioDTO.class, email
            );
            UsuarioDTO usuario = response.getBody();
            logger.info("Usuario encontrado: {}", usuario.getEmail());

            return new User(
                usuario.getEmail(),
                //"{noop}"  obtiene contraseña no encriptada, por que aun no se ha hecho esa configuración
                "{noop}" + usuario.getPassword(),
                List.of(new SimpleGrantedAuthority("ROLE_" + usuario.getTipoUsuario()))
            );
        } catch (HttpClientErrorException e) {
            logger.warn("Usuario no encontrado: {}", email);
            throw new UsernameNotFoundException("Usuario no encontrado: " + email);
        }
    }

    public UsuarioDTO loginYObtenerUsuario(String email, String password) {
        AuthRequest request = new AuthRequest();
        request.setEmail(email);
        request.setPassword(password);

        try {
            logger.info("Autenticando y recuperando usuario vía microservicio: {}", email);
            ResponseEntity<UsuarioDTO> response = restTemplate.postForEntity(
                USER_SERVICE_LOGIN_URL, request, UsuarioDTO.class
            );
            return response.getBody();
        } catch (HttpClientErrorException e) {
            logger.error("Error autenticando a {}: {}", email, e.getStatusCode());
            throw new BadCredentialsException("Credenciales inválidas");
        }
    }

    public EmpleadoDTO registerEmpleado(UsuarioDTO nuevoEmpleado) {
        EmpleadoDTO response = restTemplate.postForObject(EMPLEADO_SERVICE_REGISTER_URL, nuevoEmpleado, EmpleadoDTO.class);
        return response;
    }

    public EmpleadorDTO registerEmpleador(UsuarioDTO nuevoEmpleador) {
        EmpleadorDTO response = restTemplate.postForObject(EMPLEADOR_SERVICE_REGISTER_URL, nuevoEmpleador, EmpleadorDTO.class);
        return response;
    }
}

