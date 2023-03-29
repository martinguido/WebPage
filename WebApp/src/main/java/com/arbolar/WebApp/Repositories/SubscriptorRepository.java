package com.arbolar.WebApp.Repositorios;

import com.arbolar.WebApp.DAO.Voluntario;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface RepositorioVoluntario extends CrudRepository<Voluntario, Long> {
    ArrayList<Voluntario> findByName(String nombre);
    ArrayList<Voluntario> findByMail(String mail);

}
