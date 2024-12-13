package com.serviciosya.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.serviciosya.model.Empleo;
import com.serviciosya.service.EmpleoService;

@RestController
@RequestMapping("/empleo")
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
		if (empleoService.buscarEmpleoPorId(id) != null) {
			empleoService.eliminarEmpleo(id);
			return ResponseEntity.status(HttpStatus.OK).body("Empleo eliminado");
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe el empleo que solicitó");
		}
	}

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
		
	}

}
