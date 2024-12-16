package com.serviciosya.model;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_empleado_habilidad")
public class EmpleadoHabilidad {

	@EmbeddedId
	private EmpleadoHabilidadId id = new EmpleadoHabilidadId();
	
	@ManyToOne
    @MapsId("idHabilidad")
    @JoinColumn(name = "id_habilidad")
    private Habilidad idHabilidad;

    @ManyToOne
    @MapsId("idUsuario")
    @JoinColumn(name = "id_usuario")
    private Usuario idUsuario;
}
