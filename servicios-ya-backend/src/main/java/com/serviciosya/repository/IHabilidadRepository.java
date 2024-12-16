package com.serviciosya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serviciosya.model.Habilidad;

@Repository
public interface IHabilidadRepository extends JpaRepository<Habilidad, Integer>{

}
