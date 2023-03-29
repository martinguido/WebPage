package com.arbolar.WebApp.Repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import com.arbolar.WebApp.DAO.Consulta;

@Repository
public interface RepositorioConsulta extends CrudRepository<Consulta, Long> {
    ArrayList<Consulta> findByName(String nombre);
    ArrayList<Consulta> findByMail(String mail);

}