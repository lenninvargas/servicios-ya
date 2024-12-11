package com.serviciosya.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.serviciosya.model.Empleo;
import com.serviciosya.service.EmpleoService;

@RestController
@RequestMapping("/api/empleo")
public class EmpleoController {

	@Autowired
	private EmpleoService empleoService;
	
	@PutMapping("/{id}")
	public ResponseEntity<?> actualizarEmpleo(@RequestBody Empleo empleo, @PathVariable Long id) {
		try {
			return ResponseEntity.ok(empleoService.actualizarEmpleo(empleo, id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: " + e.getMessage());
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> eliminarEmpleo(@PathVariable Long id) {
		try {
			empleoService.eliminarEmpleo(id);
			return ResponseEntity.status(HttpStatus.OK).body("Empleo eliminado");
		} catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: " + e.getMessage());
		}
	}
}
