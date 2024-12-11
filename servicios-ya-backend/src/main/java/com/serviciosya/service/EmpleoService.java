package com.serviciosya.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serviciosya.model.Empleo;
import com.serviciosya.repository.IEmpleoRepository;
import com.serviciosya.repository.IUsuarioRepository;

@Service
public class EmpleoService {

	@Autowired
	private IUsuarioRepository repoUsuario;
	
	@Autowired
	private IUsuarioRepository repoHabilidad;
	
	@Autowired
	private IEmpleoRepository empleoRepository;
	
	//Listar Empleos
	public List<Empleo> listarEmpleos(){
		
		return empleoRepository.findAll();
		
	}
	
	
	//Registrar Empleos
	public Empleo registrarEmpleo(Empleo empleo) {
		
		return empleoRepository.save(empleo);
		
	}
	
	
	public Empleo buscarEmpleoPorId(Long id) {
		
		return empleoRepository.findById(id).orElse(null);
		
	}
}
