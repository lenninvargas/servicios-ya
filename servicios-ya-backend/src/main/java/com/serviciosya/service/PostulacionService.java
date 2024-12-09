package com.serviciosya.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serviciosya.repository.IPostulanteRepository;

@Service
public class PostulacionService {

	@Autowired
	private IPostulanteRepository repoPostulante;
}
