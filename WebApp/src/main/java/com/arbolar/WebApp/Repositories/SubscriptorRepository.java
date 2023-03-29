package com.arbolar.WebApp.Repositories;

import com.arbolar.WebApp.DAO.Subscriptors;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface SubscriptorRepository extends CrudRepository<Subscriptors, Long> {
    ArrayList<Subscriptors> findByName(String name);
    ArrayList<Subscriptors> findByMail(String mail);

}
