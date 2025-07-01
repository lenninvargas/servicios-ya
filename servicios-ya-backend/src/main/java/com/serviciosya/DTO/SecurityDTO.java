package com.serviciosya.DTO;

import lombok.Data;

@Data
public class SecurityDTO {
    private String email;
    private String password;
    private String tipoUsuario;
}

