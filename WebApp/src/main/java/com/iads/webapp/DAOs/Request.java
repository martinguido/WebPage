package com.iads.webapp.DAOs;

import java.time.LocalDate;
import java.util.Date;
import java.util.Objects;

import jakarta.persistence.*;

@Entity
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
    private Date requestDate;

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

    public String getRequest() {
        return request;
    }

    public void setRequest(String request) {
        this.request = request;
    }

    public Date getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(Date requestDate) {
        this.requestDate = requestDate;
    }

    public Request() {
    }

    public Request(String name, String mail, String request, Date requestDate) {
        this.name = name;
        this.mail = mail;
        this.request = request;
        this.requestDate = requestDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Request request1 = (Request) o;
        return Objects.equals(id, request1.id) && Objects.equals(name, request1.name) && Objects.equals(mail, request1.mail) && Objects.equals(request, request1.request) && Objects.equals(requestDate, request1.requestDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, mail, request, requestDate);
    }

    @Override
    public String toString() {
        return "Request{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", mail='" + mail + '\'' +
                ", request='" + request + '\'' +
                ", requestDate=" + requestDate +
                '}';
    }
}
