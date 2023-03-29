package com.arbolar.WebApp.DAO;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.Objects;

@EntityScan
public class Voluntario {
    @Id
    @Column(name = "ID_SUBSCRIPCION")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="NOMBRE",nullable = false)
    private String nombre;

    @Column(name="MAIL",nullable = false)
    private String mail;
    @Column(name="FECHA_SUBSCRIPCION",nullable = false)
    private LocalDate fechaSubscripcion;

    public Voluntario(String nombre, String mail, LocalDate fechaSubscripcion) {
        this.nombre = nombre;
        this.mail = mail;
        this.fechaSubscripcion = fechaSubscripcion;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public LocalDate getFechaSubscripcion() {
        return fechaSubscripcion;
    }

    public void setFechaSubscripcion(LocalDate fechaSubscripcion) {
        this.fechaSubscripcion = fechaSubscripcion;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Voluntario that = (Voluntario) o;
        return id.equals(that.id) && nombre.equals(that.nombre) && mail.equals(that.mail) && fechaSubscripcion.equals(that.fechaSubscripcion);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, mail, fechaSubscripcion);
    }

    @Override
    public String toString() {
        return "Voluntarios{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", mail='" + mail + '\'' +
                ", fechaSubscripcion=" + fechaSubscripcion +
                '}';
    }
}
