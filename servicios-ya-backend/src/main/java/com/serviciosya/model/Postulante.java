package com.serviciosya.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Data
@Entity
@Table(name = "tb_postulante")
public class Postulante {

    @EmbeddedId
    private PostulanteId id = new PostulanteId();

    @ManyToOne
    @MapsId("idEmpleo")
    @JoinColumn(name = "id_empleo")
    private Empleo idEmpleo;

    @ManyToOne
    @MapsId("idUsuario")
    @JoinColumn(name = "id_usuario")
    private Usuario idUsuario;
    
    private Boolean estado;
    
    @Column(name = "precio_propuesta")
    private Double precioPropuesta;
    
    @Temporal(TemporalType.DATE)
    private LocalDate fecha;
    
    @PrePersist
    public void prePersist() {
    	if (estado == null) {
    		estado = false;
    	}
    }

}