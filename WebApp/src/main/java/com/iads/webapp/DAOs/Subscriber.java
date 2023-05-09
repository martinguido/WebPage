package com.iads.webapp.DAOs;

import jakarta.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
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
    private Date subscriptionDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public Date getSubscriptionDate() {
        return subscriptionDate;
    }

    public void setSubscriptionDate(Date subscriptionDate) {
        this.subscriptionDate = subscriptionDate;
    }

    public Subscriber() {
    }

    public Subscriber(String name, String mail, Date subscriptionDate) {
        this.name = name;
        this.mail = mail;
        this.subscriptionDate = subscriptionDate;
    }

    public Subscriber(Long id, String name, String mail, Date subscriptionDate) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.subscriptionDate = subscriptionDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Subscriber that = (Subscriber) o;
        return Objects.equals(name, that.name) && Objects.equals(mail, that.mail) && Objects.equals(subscriptionDate, that.subscriptionDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, mail, subscriptionDate);
    }

    @Override
    public String toString() {
        return "Subscriber{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", mail='" + mail + '\'' +
                ", subscriptionDate=" + subscriptionDate +
                '}';
    }
}
