package com.serviciosya.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("Empleador")
public class Empleador extends Usuario{
	
}
