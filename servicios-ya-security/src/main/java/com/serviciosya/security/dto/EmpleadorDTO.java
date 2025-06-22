package com.serviciosya.security.dto;

import java.time.LocalDate;
import com.serviciosya.security.model.Pais;
import lombok.Data;

@Data
public class EmpleadorDTO {

	private String nombre;
    private String apellidoPat;
    private String apellidoMat;
    private LocalDate fechaNac;
    private String dni;
    private Pais pais;
    private String email;
    private String password;
}
