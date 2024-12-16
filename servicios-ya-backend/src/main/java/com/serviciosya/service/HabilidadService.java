package com.serviciosya.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serviciosya.model.Habilidad;
import com.serviciosya.repository.IHabilidadRepository;

@Service
public class HabilidadService {

	
	@Autowired
	private IHabilidadRepository habilidadRepository;
	
	
	public List<Habilidad> listarHabilidades(){
		return habilidadRepository.findAll();
	}
	
}
