package com.iads.webapp.Repositories;

import com.iads.webapp.DAOs.Request;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;

@Repository
public interface RequestRepository extends CrudRepository<Request, Long> {
    List<Request> findAll();
    ArrayList<Request> findByName(String name);
    ArrayList<Request> findByMail(String mail);

}