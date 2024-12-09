package com.serviciosya.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serviciosya.repository.IUsuarioRepository;

@Service
public class EmpleoService {

	@Autowired
	private IUsuarioRepository repoUsuario;
	
	@Autowired
	private IUsuarioRepository repoHabilidad;
}
