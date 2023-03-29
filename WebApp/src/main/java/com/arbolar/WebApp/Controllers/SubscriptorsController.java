package com.arbolar.WebApp.Controladores;

import com.arbolar.WebApp.DAO.Voluntario;
import com.arbolar.WebApp.Repositorios.RepositorioVoluntario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@RestController
@RequestMapping("api/v1")
public class ControladorVoluntario {
    private RepositorioVoluntario repositorioVoluntario;
    @Autowired
    public ControladorVoluntario(final RepositorioVoluntario repositorioVoluntario){this.repositorioVoluntario = repositorioVoluntario;}

    @GetMapping("/voluntarios")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<ArrayList<Voluntario>> getSubscriptors(){
        ArrayList<Subscriptors> allSubscriptors = StreamSupport.stream(repositorioVoluntario.findAll().spliterator(),false).collect(Collectors.toList());
    }

}
