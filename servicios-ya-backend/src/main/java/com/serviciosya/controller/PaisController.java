package com.serviciosya.controller;

import com.serviciosya.model.Pais;
import com.serviciosya.service.PaisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/country")
@CrossOrigin(origins = "http://localhost:4200")
public class PaisController {
    @Autowired
    private PaisService paisService;

    @GetMapping()
    public List<Pais> listarPaises() {
        return paisService.listarPaises();
    }
}
