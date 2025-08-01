package com.serviciosya.DTO;

import java.time.LocalDate;
import java.util.List;

import com.serviciosya.model.Pais;
import lombok.Data;

@Data
public class EmpleadoDTO {

	private String nombre;
    private String apellidoPat;
    private String apellidoMat;
    private LocalDate fechaNac;
    private String dni;
    private Pais pais;
    private String email;
    private String password;
    private List<Integer> habilidadesIds;
}
