package com.serviciosya.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.serviciosya.model.Postulante;
import com.serviciosya.service.PostulanteService;

@RestController
@RequestMapping("/api/postulante")
public class PostulanteController {

	@Autowired
	private PostulanteService postulanteService;
	
	@PostMapping
	public ResponseEntity<?> registrarPostulacion (@RequestBody Postulante postulante) {
		try {
			return ResponseEntity.ok(postulanteService.registrarPostulacion(postulante));
		} catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
		}
	}
	
}
