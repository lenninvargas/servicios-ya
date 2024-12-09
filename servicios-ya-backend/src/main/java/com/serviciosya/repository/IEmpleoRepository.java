package com.serviciosya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serviciosya.model.Empleo;

@Repository
public interface IEmpleoRepository extends JpaRepository<Empleo, Long>{

}
