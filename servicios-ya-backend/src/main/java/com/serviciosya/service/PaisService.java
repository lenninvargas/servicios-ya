package com.serviciosya.service;

import com.serviciosya.model.Pais;
import com.serviciosya.repository.IPaisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaisService {
    @Autowired
    private IPaisRepository paisRepository;

    public List<Pais> listarPaises() {
        return paisRepository.findAll();
    }
}
