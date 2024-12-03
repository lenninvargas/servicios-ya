package com.serviciosya.model;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class PostulanteId implements Serializable{

    private static final long serialVersionUID = 1L;

    private Long idEmpleo;
    private Long idUsuario;
}