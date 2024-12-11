package com.serviciosya.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.serviciosya.model.Habilidad;
import com.serviciosya.service.HabilidadService;

@RestController
@RequestMapping("/habilidad")
public class HabilidadController {

	@Autowired
	private HabilidadService habilidadService;
	
	
	@GetMapping
	public ResponseEntity<?> obtenerHabilidades(){
		
		
		List<Habilidad> habilidades =  habilidadService.listarHabilidades();
		
		if(habilidades.isEmpty()){
			
			
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Lista Vacia");
			
		}else {
			
			return ResponseEntity.ok(habilidades);
		}
		
	}
	
}
