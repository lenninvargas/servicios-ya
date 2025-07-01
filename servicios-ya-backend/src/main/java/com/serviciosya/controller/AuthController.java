package com.serviciosya.controller;

import com.serviciosya.DTO.EmpleadoDTO;
import com.serviciosya.DTO.EmpleadorDTO;
import com.serviciosya.DTO.LoginRequest;
import com.serviciosya.model.Usuario;
import com.serviciosya.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:8090")
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;
    
    @PostMapping("/registrar-empleado")
    public ResponseEntity<?> registrarEmpleado(@RequestBody EmpleadoDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.registrarEmpleado(dto));
    }
    
    @PostMapping("/registrar-empleador")
    public ResponseEntity<?> registrarEmpleador(@RequestBody EmpleadorDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.registrarEmpleador(dto));
    }
    

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            Usuario authenticatedUser = usuarioService.login(loginRequest.getEmail());
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
    
    


    @GetMapping("/email/{email}")
    public ResponseEntity<?> getUsuarioByEmail(@PathVariable String email) {
        Usuario usuario = usuarioService.findUsuarioByEmail(email); 
        if (usuario != null) {
            return ResponseEntity.ok(usuarioService.convertirADTO(usuario));
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
