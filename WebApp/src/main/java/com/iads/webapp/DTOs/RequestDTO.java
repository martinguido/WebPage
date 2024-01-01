package com.iads.webapp.DTOs;

import lombok.Data;

@Data
public class RequestDTO {
    private String name;
    private String mail;
    private String request;

    public RequestDTO() {
    }

    public RequestDTO(String name, String mail, String request) {
        this.name = name;
        this.mail = mail;
        this.request = request;
    }

}
