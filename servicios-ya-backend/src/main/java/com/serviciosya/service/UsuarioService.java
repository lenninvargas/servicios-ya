package com.serviciosya.service;

import com.serviciosya.DTO.UsuarioDTO;
import com.serviciosya.model.Empleado;
import com.serviciosya.model.Empleador;
import com.serviciosya.model.Usuario;
import com.serviciosya.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired
    private IUsuarioRepository usuarioRepository;

    public Usuario registrarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario login(String email, String password) {
        Usuario usuario = usuarioRepository.findByEmail(email);
        if (usuario == null || !usuario.getPassword().equals(password)) {
            throw new IllegalArgumentException("Credenciales incorrectas");
        }
        return usuario;
    }

    public Usuario crearUsuarioDesdeDTO(UsuarioDTO usuarioDTO) {
        Usuario usuario;
        if (usuarioDTO.getTipoUsuario().equalsIgnoreCase("Empleado")) {
            //Empleado empleado = new Empleado();
            //empleado.setCalificacion(usuarioDTO.getCalificacion());
            usuario = new Empleado();
        } else if (usuarioDTO.getTipoUsuario().equalsIgnoreCase("Empleador")) {
            usuario = new Empleador();
        } else {
            throw new IllegalArgumentException("Tipo de usuario no reconocido");
        }
        return usuario;
    }
}
