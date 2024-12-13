package com.serviciosya.service;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import com.serviciosya.model.PostulanteId;
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
	private IPostulanteRepository repoPostulacion;
	
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
		
		return repoPostulacion.save(postulante);
	}
	/*public List<Postulante> listarPostulantesPorEmpleo(Long idEmpleo) {
		Empleo empleo = repoEmpleo.findById(idEmpleo).orElse(null);
		if (empleo == null) {
			throw new IllegalArgumentException("El empleo con ID " + idEmpleo + " no existe");
		}

		return repoPostulante.findByIdEmpleo_Id(idEmpleo);
	} */

	public List<Empleo> obtenerEmpleosPostuladosPorEmpleado(Long idUsuario) {
		Usuario usuario = repoUsuario.findById(idUsuario).orElse(null);

		if (usuario == null) {
			throw new IllegalArgumentException("El usuario con ID " + idUsuario + " no existe.");
		}
		if ("Empleado".equals(usuario.getTipoUsuario())) {
			List<Postulante> postulaciones = repoPostulacion.findByIdUsuario_Id(idUsuario);

			if (postulaciones != null && !postulaciones.isEmpty()) {
				return postulaciones.stream()
						.map(Postulante::getIdEmpleo)
						.collect(Collectors.toList());
			}
			return Collections.emptyList();
		}
		return null;
	}

	public Postulante obtenerPostulacionPorId(Long idUsuario, Long idEmpleo) {
		PostulanteId postulanteId = new PostulanteId(idUsuario, idEmpleo);
		return repoPostulacion.findById(postulanteId).orElse(null);
	}

	public Postulante editarEstado(Long idUsuario, Long idEmpleo, Boolean nuevoEstado) {
		PostulanteId postulanteId = new PostulanteId(idUsuario, idEmpleo);

		Postulante postulacion = repoPostulacion.findById(postulanteId).orElse(null);

		if (postulacion != null) {
			postulacion.setEstado(nuevoEstado);
			return repoPostulacion.save(postulacion);
		}
		return null;
	}
}
