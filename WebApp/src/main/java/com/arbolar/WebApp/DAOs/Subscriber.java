package com.arbolar.WebApp.DAOs;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Table(name="SUBSCRIBERS")
public class Subscriber {

    @Id
    @Column(name = "ID_SUBSCRIBER")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="NAME",nullable = false)
    private String name;

    @Column(name="MAIL",nullable = false)
    private String mail;

    @Column(name="SUBSCRIPTION_DATE",nullable = false)
    private LocalDate subscriptionDate;

}
