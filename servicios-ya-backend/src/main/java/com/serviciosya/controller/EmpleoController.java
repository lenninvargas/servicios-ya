package com.serviciosya.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.serviciosya.model.Empleo;
import com.serviciosya.service.EmpleoService;

@RestController
@RequestMapping("/jobs")
public class EmpleoController {
	
	@Autowired
	private EmpleoService empleoService;
	
	@GetMapping
	public ResponseEntity<?> obtenerEmpleos(){
		
		
		List<Empleo> empleos =  empleoService.listarEmpleos();
		
		if(empleos.isEmpty()){
			
			
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Lista Vacia");
			
		}else {
			
			return ResponseEntity.ok(empleos);
		}
		
	}
	
	@PostMapping
	public ResponseEntity<?> agregaEmpleo(@RequestBody Empleo empleo){
		
		
		try {
			
			Empleo empleoGrabado = empleoService.registrarEmpleo(empleo);
			
			return ResponseEntity.ok(empleoGrabado);
			
		}catch(Exception ex) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al agregar nuevo empleo");
		}
		
	}
	
	@GetMapping("/filter/{id}")
	public ResponseEntity<?> filtradoPorId(@PathVariable Long id){
		
		Empleo empleoPorId = empleoService.buscarEmpleoPorId(id);
		
		
		if(empleoPorId == null) {
			
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Empleo no encontrado");
		}else {
			
			return ResponseEntity.ok(empleoPorId);
			
		}
		
		
		
		
		
		/*try {
			
			Empleo empleoPorId = empleoService.buscarEmpleoPorId(id);
			
			return ResponseEntity.ok(empleoPorId);
			
		}catch(Exception ex) {
			
			
		}
		
		
	*/
		
	}
	
	
	
	

}
