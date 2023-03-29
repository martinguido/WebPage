package com.arbolar.WebApp.DAO;
import java.time.LocalDate;
import java.util.Objects;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@EntityScan
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

    public Request(Long id, String name, String mail, String request, LocalDate requestDate) {
        this.id = id;
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
        return id.equals(request1.id) && name.equals(request1.name) && mail.equals(request1.mail) && request.equals(request1.request) && requestDate.equals(request1.requestDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, mail, request, requestDate);
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

    public String getRequest() {
        return request;
    }

    public void setRequest(String request) {
        this.request = request;
    }

    public LocalDate getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(LocalDate requestDate) {
        this.requestDate = requestDate;
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
