package com.serviciosya.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.PrePersist;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@DiscriminatorValue("Empleado")
public class Empleado extends Usuario{

	private Double calificacion;
	
	@PrePersist
    public void prePersist() {
    	if (calificacion == null) {
    		calificacion = 0.0;
    	}
    }
}
