package com.serviciosya.service;

import com.serviciosya.DTO.EmpleadoDTO;

import com.serviciosya.DTO.EmpleadorDTO;
import com.serviciosya.DTO.SecurityDTO;
import com.serviciosya.model.Empleado;
import com.serviciosya.model.Empleador;
import com.serviciosya.model.Habilidad;
import com.serviciosya.model.Pais;
import com.serviciosya.model.Usuario;
import com.serviciosya.repository.IHabilidadRepository;
import com.serviciosya.repository.IUsuarioRepository;


import java.time.LocalDate;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
	
    @Autowired
    private IUsuarioRepository usuarioRepository;
    
    @Autowired
    private IHabilidadRepository habilidadRepository;

    public Usuario login(String email, String password) {
        Usuario usuario = usuarioRepository.findByEmail(email);
        if (usuario == null || !usuario.getPassword().equals(password)) {
            throw new IllegalArgumentException("Credenciales incorrectas");
        }
        return usuario;
    }
    
    public Empleado registrarEmpleado(EmpleadoDTO dto) {
        Empleado empleado = new Empleado();
        mapDatosComunes(empleado, dto.getNombre(), dto.getApellidoPat(), dto.getApellidoMat(),
                        dto.getFechaNac(), dto.getDni(), dto.getEmail(), dto.getPassword(), dto.getPais());

        if (dto.getHabilidadesIds() != null) {
            List<Habilidad> habilidades = habilidadRepository.findAllById(dto.getHabilidadesIds());
            empleado.setHabilidades(habilidades);
        }

        return usuarioRepository.save(empleado);
    }
    
    public Empleador registrarEmpleador(EmpleadorDTO dto) {
        Empleador empleador = new Empleador();
        mapDatosComunes(empleador, dto.getNombre(), dto.getApellidoPat(), dto.getApellidoMat(),
                        dto.getFechaNac(), dto.getDni(), dto.getEmail(), dto.getPassword(), dto.getPais());

        return usuarioRepository.save(empleador);
    }

    private void mapDatosComunes(Usuario usuario, String nombre, String apellidoPat, String apellidoMat,
                                  LocalDate fechaNac, String dni, String email, String password, Pais pais) {
        usuario.setNombre(nombre);
        usuario.setApellidoPat(apellidoPat);
        usuario.setApellidoMat(apellidoMat);
        usuario.setFechaNac(fechaNac);
        usuario.setDni(dni);
        usuario.setEmail(email);
        usuario.setPassword(password);
        usuario.setPais(pais);
    }

    // Metodos para la autenticación
    public Usuario findUsuarioByEmail(String email) {
        Usuario usuario = usuarioRepository.findByEmail(email);
        return usuario;
    }

    public List<Usuario> listarUsuarios(){
    	return usuarioRepository.findAll();

    }
    public SecurityDTO convertirADTO(Usuario usuario) {
        SecurityDTO dto = new SecurityDTO();
        dto.setEmail(usuario.getEmail());
        dto.setPassword(usuario.getPassword());
        dto.setTipoUsuario(usuario.getTipoUsuario());
        return dto;

    }
}
