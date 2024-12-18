package com.serviciosya.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.DiscriminatorType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_usuario")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "tipo_usuario", discriminatorType = DiscriminatorType.STRING)
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="nombre", nullable = false)
	private String nombre;

	@Column(name="apellido_pat", nullable = false)
	private String apellidoPat;

	@Column(name="apellido_mat", nullable = false)
	private String apellidoMat;

	@Column(name="fecha_nac", nullable = false)
	private LocalDate fechaNac;

	@Column(name="dni",unique = true, nullable = false)
	private String dni;

	@ManyToOne
	@JoinColumn(name = "id_pais")
	private Pais pais;

	@Column(name = "email", unique = true, nullable = false)
	private String email;

	@Column(name = "password", nullable = false)
	private String password;

	@ManyToMany
	@JoinTable(name = "tb_empleado_habilidad",
			joinColumns = @JoinColumn(name = "id_usuario",  nullable = false),
			inverseJoinColumns = @JoinColumn(name = "id_habilidad", nullable = false))
	private List<Habilidad> habilidades;

	@Column(name = "tipo_usuario", insertable = false, updatable = false)
    private String tipoUsuario;
}