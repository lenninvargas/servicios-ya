package com.serviciosya.model;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Embeddable
public class PostulanteId implements Serializable{

    private static final long serialVersionUID = 1L;

    private Long idEmpleo;
    private Long idUsuario;

    public PostulanteId(Long idUsuario, Long idEmpleo) {
        this.idUsuario = idUsuario;
        this.idEmpleo = idEmpleo;
    }
}