package com.arbolar.WebApp.DAO;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.Objects;

@EntityScan
public class Subscriptors {
    @Id
    @Column(name = "ID_SUBSCRIPTION")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="NAME",nullable = false)
    private String name;

    @Column(name="MAIL",nullable = false)
    private String mail;
    @Column(name="SUBSCRIPTION_DATE",nullable = false)
    private LocalDate subscriptionDate;

    public Subscriptors(String name, String mail, LocalDate subscriptionDate) {
        this.name = name;
        this.mail = mail;
        this.subscriptionDate = subscriptionDate;
    }

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

    public LocalDate getSubscriptionDate() {
        return subscriptionDate;
    }

    public void setSubscriptionDate(LocalDate subscriptionDate) {
        this.subscriptionDate = subscriptionDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Subscriptors that = (Subscriptors) o;
        return id.equals(that.id) && name.equals(that.name) && mail.equals(that.mail) && subscriptionDate.equals(that.subscriptionDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, mail, subscriptionDate);
    }

    @Override
    public String toString() {
        return "Subscriptors{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", mail='" + mail + '\'' +
                ", subscriptionDate=" + subscriptionDate +
                '}';
    }
}
