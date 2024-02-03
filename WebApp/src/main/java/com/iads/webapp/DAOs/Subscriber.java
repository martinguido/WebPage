package com.iads.webapp.DAOs;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "SUBSCRIBERS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Subscriber {

    @Id
    @Column(name = "ID_SUBSCRIBER")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "MAIL", nullable = false)
    private String mail;

    @Column(name = "SUBSCRIPTION_DATE", nullable = false)
    private Date subscriptionDate;

    public Subscriber(String name, String mail, Date subscriptionDate) {
        this.name = name;
        this.mail = mail;
        this.subscriptionDate = subscriptionDate;
    }


}
