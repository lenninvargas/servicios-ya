package com.serviciosya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serviciosya.model.Empleo;

import java.util.List;

@Repository
public interface IEmpleoRepository extends JpaRepository<Empleo, Long>{
    Empleo findEmpleoBytitulo(String titulo);
}
