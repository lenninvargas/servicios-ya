package com.serviciosya.DTO;

import java.time.LocalDate;
import java.util.List;

import com.serviciosya.model.Habilidad;
import com.serviciosya.model.Pais;

import lombok.Data;

@Data
public class UsuarioDTO {
    private String nombre;
    private String apellidoPat;
    private String apellidoMat;
    private LocalDate fechaNac;
    private String dni;
    private Pais pais;
    private String email;
    private String password;
    private List<Habilidad> habilidades;
    private String tipoUsuario;
    private Double calificacion; // Solo para Empleado
}

