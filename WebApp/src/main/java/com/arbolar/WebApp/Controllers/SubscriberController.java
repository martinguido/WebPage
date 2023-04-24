package com.arbolar.WebApp.Controllers;

import com.arbolar.WebApp.DAOs.Subscriber;
import com.arbolar.WebApp.Repositories.SubscriberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@RestController
@RequestMapping("api/v1")
public class SubscriberController {
    private SubscriberRepository subscriberRepository;
    @Autowired
    public SubscriberController(final SubscriberRepository subscriberRepository){
        this.subscriberRepository = subscriberRepository;
    }

    @GetMapping("/subscriptors")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Subscriber>> getSubscriptors(){
        List<Subscriber> allSubscriptors = StreamSupport.stream(subscriberRepository.findAll().spliterator(),false).collect(Collectors.toList());
        return new ResponseEntity<>(allSubscriptors, HttpStatus.OK);
    }
    

}
