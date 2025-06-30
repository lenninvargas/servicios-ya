package com.serviciosya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.serviciosya.model.Empleo;

import java.util.List;

@Repository
public interface IEmpleoRepository extends JpaRepository<Empleo, Long>{
    @Query("SELECT e FROM Empleo e WHERE LOWER(TRIM(e.titulo)) LIKE LOWER(CONCAT('%', TRIM(:titulo), '%'))")
    List<Empleo> buscarPorTituloParcial(@Param("titulo") String titulo);}
