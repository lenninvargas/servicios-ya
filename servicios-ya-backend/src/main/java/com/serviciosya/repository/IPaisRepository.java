package com.serviciosya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serviciosya.model.Pais;

@Repository
public interface IPaisRepository extends JpaRepository<Pais, Integer>{

}
