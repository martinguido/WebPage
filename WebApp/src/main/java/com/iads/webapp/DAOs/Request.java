package com.iads.webapp.DAOs;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "REQUESTS")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Request {

    @Id
    @Column(name = "ID_REQUEST")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "MAIL", nullable = false)
    private String mail;

    @Column(name = "REQUEST", columnDefinition = "text")
    private String request;

    @Column(name = "REQUEST_DATE", nullable = false)
    private Date requestDate;

    @Column(name = "STATUS", nullable = false)
    private String status;

    public Request(String name, String mail, String request, Date requestDate) {
        this.name = name;
        this.mail = mail;
        this.request = request;
        this.requestDate = requestDate;
        this.status = "Abierto";
    }

    public void closeStatus() {
        this.status = "Cerrado";
    }
}
