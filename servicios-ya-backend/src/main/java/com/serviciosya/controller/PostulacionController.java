package com.serviciosya.controller;

import com.serviciosya.model.Empleo;
//import com.serviciosya.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.serviciosya.model.Postulante;
import com.serviciosya.service.PostulanteService;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/applications")
public class PostulacionController {

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

	/*@GetMapping("/empleo/{idEmpleo}")
	public ResponseEntity<?> listarPostulantes(@PathVariable Long idEmpleo) {
		try {
			List<Postulante> postulantes = postulanteService.listarPostulantesPorEmpleo(idEmpleo);
			return ResponseEntity.ok(postulantes);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Empleo no encotrado");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al listar postulantes");
		}
	} */

	@GetMapping("/postulante/{id}")
	public ResponseEntity<?> listarEmpleosPostulados(@PathVariable Long id) {
		try {
			List<Empleo> empleos = postulanteService.obtenerEmpleosPostuladosPorEmpleado(id);

			if (empleos == null) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Empleado no existente o no válido.");
			}

			if (empleos.isEmpty()) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Empleado sin postulaciones.");
			}

			return ResponseEntity.ok(empleos);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al listar postulaciones.");
		}
	}

	@GetMapping
	public ResponseEntity<?> obtenerPostulacion(
			@RequestParam Long idUsuario,
			@RequestParam Long idEmpleo) {
		Postulante postulante = postulanteService.obtenerPostulacionPorId(idUsuario, idEmpleo);

		if (postulante != null) {
			return ResponseEntity.ok(postulante);
		} else {
			return ResponseEntity.status(404).body("Postulación no encontrada");
		}
	}

	@PutMapping("/{idUsuario}/{idEmpleo}")
	public ResponseEntity<?> editarEstadoPostulacion(
			@PathVariable  Long idUsuario,
			@PathVariable  Long idEmpleo,
			@RequestBody Map<String, Boolean> requestBody) {
		try {
			Boolean nuevoEstado = requestBody.get("estado");

			Postulante postulacionActualizada = postulanteService.editarEstado(idUsuario, idEmpleo, nuevoEstado);
			if (postulacionActualizada != null) {
				return ResponseEntity.ok(postulacionActualizada);
			} else {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Postulación no encontrada");
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar el estado");
		}
	}
}
