package com.serviciosya.controller;

import com.serviciosya.DTO.LoginRequest;
import com.serviciosya.DTO.UsuarioDTO;
import com.serviciosya.model.Usuario;
import com.serviciosya.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/register")
    public ResponseEntity<?> registrarUsuario(@RequestBody UsuarioDTO usuarioDTO) {
        try {
            Usuario usuario = usuarioService.crearUsuarioDesdeDTO(usuarioDTO);

            usuario.setNombre(usuarioDTO.getNombre());
            usuario.setApellidoPat(usuarioDTO.getApellidoPat());
            usuario.setApellidoMat(usuarioDTO.getApellidoMat());
            usuario.setFechaNac(usuarioDTO.getFechaNac());
            usuario.setDni(usuarioDTO.getDni());
            usuario.setPais(usuarioDTO.getPais());
            usuario.setEmail(usuarioDTO.getEmail());
            usuario.setPassword(usuarioDTO.getPassword());
            usuario.setHabilidades(usuarioDTO.getHabilidades());

            Usuario registrado = usuarioService.registrarUsuario(usuario);
            return ResponseEntity.ok(registrado);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor: " + e.getMessage());
        }
    }
    

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            Usuario authenticatedUser = usuarioService.login(loginRequest.getEmail(), loginRequest.getPassword());
            return ResponseEntity.ok(authenticatedUser);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas");
        }
    }
    
    @GetMapping("/usuarios")
    public ResponseEntity<?> listarUsuarios() {
        try {
            return ResponseEntity.ok(usuarioService.listarUsuarios());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al listar usuarios: " + e.getMessage());
        }
    }
    
    
}
