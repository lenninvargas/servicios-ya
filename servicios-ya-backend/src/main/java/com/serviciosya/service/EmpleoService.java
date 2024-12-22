package com.serviciosya.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serviciosya.model.Empleo;
import com.serviciosya.model.Habilidad;
import com.serviciosya.repository.IEmpleoRepository;
import com.serviciosya.repository.IHabilidadRepository;

@Service
public class EmpleoService {
	
	@Autowired
	private IHabilidadRepository repoHabilidad;
	
	@Autowired
	private IEmpleoRepository repoEmpleo;
	
	public Empleo actualizarEmpleo(Empleo empleoActualizado, Long id) {
		Empleo empleo = repoEmpleo.findById(id).orElse(null);
		Habilidad habilidad = repoHabilidad.findById(empleoActualizado.getHabilidad().getId()).orElse(null);
	
		empleo.setTitulo(empleoActualizado.getTitulo());
		empleo.setDescripcion(empleoActualizado.getDescripcion());
		empleo.setHabilidad(habilidad);
		empleo.setPresupuesto(empleoActualizado.getPresupuesto());
		return repoEmpleo.save(empleo);
	}
	
	public void eliminarEmpleo(Long id) {
		repoEmpleo.deleteById(id);
	}
	
	//Listar Empleos
	public List<Empleo> listarEmpleos(){
		return repoEmpleo.findAll();
	}
	
	//Registrar Empleos
	public Empleo registrarEmpleo(Empleo empleo) {
		return repoEmpleo.save(empleo);
	}
	
	public Empleo buscarEmpleoPorId(Long id) {
		return repoEmpleo.findById(id).orElse(null);
	}

	public Empleo buscarEmpleoPorTitulo(String titulo) {
		return repoEmpleo.findEmpleoBytitulo(titulo);
	}
}
