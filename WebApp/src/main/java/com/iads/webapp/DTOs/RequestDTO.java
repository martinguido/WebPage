package com.iads.webapp.DTOs;

import lombok.Data;
import java.util.Date;
@Data
public class RequestDTO {
    private String name;
    private String mail;
    private String request;
    private Date requestDate;
    private String status;
    public RequestDTO() {
    }

    public RequestDTO(String name, String mail, String request, Date requestDate, String status) {
        this.name = name;
        this.mail = mail;
        this.request = request;
        this.requestDate = requestDate;
        this.status = status;
    }

}
