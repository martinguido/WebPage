package com.iads.webapp.DAOs;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "pins")
public class PasswordRecovery {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pin_id")
    private Long id;

    @Column(name = "pin")
    private String pin;

    @ManyToOne
    @JoinColumn(name = "pin_user", referencedColumnName = "id")
    private User user;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "date_created")
    private Date dateCreated;

}