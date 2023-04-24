package com.arbolar.WebApp.DAOs;

import java.time.LocalDate;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Table(name="REQUESTS")
public class Request {

    @Id
    @Column(name = "ID_REQUEST")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "NAME", nullable = false)
    private String name;

    @Column(name = "MAIL", nullable = false)
    private String mail;

    @Column(name="REQUEST", columnDefinition = "text")
    private String request;

    @Column(name="REQUEST_DATE",nullable = false)
    private LocalDate requestDate;
}
