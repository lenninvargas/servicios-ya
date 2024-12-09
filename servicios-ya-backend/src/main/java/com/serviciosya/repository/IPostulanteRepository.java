package com.serviciosya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serviciosya.model.Postulante;
import com.serviciosya.model.PostulanteId;

@Repository
public interface IPostulanteRepository extends JpaRepository<Postulante, PostulanteId>{

}
