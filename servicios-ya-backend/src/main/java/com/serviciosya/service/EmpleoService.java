package com.serviciosya.service;

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
}
