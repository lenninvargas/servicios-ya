package com.serviciosya.security.controller;

import com.serviciosya.security.CustomUserDetailsService;
import com.serviciosya.security.JwtService;
import com.serviciosya.security.dto.AuthRequest;
import com.serviciosya.security.dto.EmpleadoDTO;
import com.serviciosya.security.dto.EmpleadorDTO;
import com.serviciosya.security.dto.UsuarioDTO;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    private final JwtService jwtService;
    private final CustomUserDetailsService userDetailsService;

    public AuthController(JwtService jwtService, CustomUserDetailsService userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest loginRequest) {
        logger.info("Intento de login con email: {}", loginRequest.getEmail());
        try {

            UsuarioDTO usuario = userDetailsService.loginYObtenerUsuario(
                loginRequest.getEmail(), loginRequest.getPassword()
            );
            
            UserDetails userDetails = new User(
                usuario.getEmail(),
                usuario.getPassword(),
                List.of(new SimpleGrantedAuthority("ROLE_" + usuario.getTipoUsuario()))
            );
            String token = jwtService.generateToken(userDetails);
            logger.info("Token generado para usuario: {}", usuario.getEmail());
            logger.info("Rol de usuario: {}", List.of(new SimpleGrantedAuthority("ROLE_" + usuario.getTipoUsuario())));

            return ResponseEntity.ok()
                .header("Authorization", "Bearer " + token)
                .body(usuario);

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno: " + e);
        }
    }

    @PostMapping("/registrar-empleado")
    public ResponseEntity<?> registrarEmpleado(@RequestBody UsuarioDTO nuevoEmpleado) {
        try {
            EmpleadoDTO registrado = userDetailsService.registerEmpleado(nuevoEmpleado);

            UserDetails user = new User(
                registrado.getEmail(),
                registrado.getPassword(),
                List.of(new SimpleGrantedAuthority("ROLE_EMPLEADO"))
            );

            String token = jwtService.generateToken(user);

            return ResponseEntity.ok()
                    .header("Authorization", "Bearer " + token)
                    .body(registrado);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al registrar empleado: " + e.getMessage());
        }
    }

    @PostMapping("/registrar-empleador")
    public ResponseEntity<?> registrarEmpleador(@RequestBody UsuarioDTO nuevoEmpleador) {
        try {
            EmpleadorDTO registrado = userDetailsService.registerEmpleador(nuevoEmpleador);

            UserDetails user = new User(
                registrado.getEmail(),
                registrado.getPassword(),
                List.of(new SimpleGrantedAuthority("ROLE_EMPLEADOR"))
            );

            String token = jwtService.generateToken(user);

            return ResponseEntity.ok()
                    .header("Authorization", "Bearer " + token)
                    .body(registrado);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al registrar empleador: " + e.getMessage());
        }
    }

}