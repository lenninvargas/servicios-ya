package com.serviciosya.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serviciosya.model.Empleo;
import com.serviciosya.model.Postulante;
import com.serviciosya.model.Usuario;
import com.serviciosya.repository.IEmpleoRepository;
import com.serviciosya.repository.IPostulanteRepository;
import com.serviciosya.repository.IUsuarioRepository;

@Service
public class PostulanteService {

	@Autowired
	private IPostulanteRepository repoPostulante;
	
	@Autowired
	private IEmpleoRepository repoEmpleo;
	
	@Autowired
	private IUsuarioRepository repoUsuario;
	
	public Postulante registrarPostulacion (Postulante postulante) {
		Usuario usuario = repoUsuario.findById(postulante.getIdUsuario().getId()).orElse(null);
		Empleo empleo = repoEmpleo.findById(postulante.getIdEmpleo().getId()).orElse(null);
		if (usuario.getTipoUsuario() != "Empleador") {
			postulante.setFecha(LocalDate.now());
			postulante.setIdEmpleo(empleo);
			postulante.setIdUsuario(usuario);
		}
		
		return repoPostulante.save(postulante);
	}
}
