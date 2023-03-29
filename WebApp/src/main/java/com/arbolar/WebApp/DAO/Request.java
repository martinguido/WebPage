package com.arbolar.WebApp.DAO;
import java.time.LocalDate;
import java.util.Objects;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@EntityScan
public class Consulta {

    @Id
    @Column(name = "ID_CONSULTA")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "NOMBRE", nullable = false)
    private String nombre;

    @Column(name = "MAIL", nullable = false)
    private String mail;

    @Column(name="CONSULTA", columnDefinition = "text")
    private String consulta;
    @Column(name="FECHA_CONSULTA",nullable = false)
    private LocalDate fechaConsulta;

    public Consulta() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getFechaConsulta() {
        return fechaConsulta;
    }

    public void setFechaConsulta(LocalDate fechaConsulta) {
        this.fechaConsulta = fechaConsulta;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getConsulta() {
        return consulta;
    }

    public void setConsulta(String consulta) {
        this.consulta = consulta;
    }

    public Consulta(String nombre, String mail, String consulta, LocalDate fechaConsulta) {
        this.nombre = nombre;
        this.mail = mail;
        this.consulta = consulta;
        this.fechaConsulta = fechaConsulta;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Consulta consulta = (Consulta) o;
        return id.equals(consulta.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Consulta{" +
                "id=" + id +
                ", fechaConsulta=" + fechaConsulta +
                ", nombre='" + nombre + '\'' +
                ", mail='" + mail + '\'' +
                ", consulta='" + consulta + '\'' +
                '}';
    }
}
