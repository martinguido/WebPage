package com.arbolar.WebApp.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import com.arbolar.WebApp.DAO.Request;

@Repository
public interface RequestRepository extends CrudRepository<Request, Long> {
    ArrayList<Request> findByName(String name);
    ArrayList<Request> findByMail(String mail);

}