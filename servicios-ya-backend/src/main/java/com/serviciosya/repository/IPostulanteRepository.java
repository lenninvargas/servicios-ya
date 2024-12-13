package com.serviciosya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serviciosya.model.Postulante;
import com.serviciosya.model.PostulanteId;

import java.util.List;

@Repository
public interface IPostulanteRepository extends JpaRepository<Postulante, PostulanteId>{
    /*List<Postulante> findByIdEmpleo_Id(Long idEmpleo);*/
    List<Postulante> findByIdUsuario_Id(Long idUsuario);

}
