package com.iads.webapp.Repositories;

import com.iads.webapp.DAOs.Subscriber;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
@Repository
public interface SubscriberRepository extends CrudRepository<Subscriber, Long> {
    ArrayList<Subscriber> findByName(String name);
    ArrayList<Subscriber> findByMail(String mail);

}
