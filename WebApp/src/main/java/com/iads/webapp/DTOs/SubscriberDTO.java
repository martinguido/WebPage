package com.iads.webapp.DTOs;

import lombok.Data;

@Data
public class SubscriberDTO {

    private String name;
    private String mail;

    public SubscriberDTO() {
    }

    public SubscriberDTO(String name, String mail) {
        this.name = name;
        this.mail = mail;
    }
}
