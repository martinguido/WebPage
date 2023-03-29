package com.arbolar.WebApp.Controllers;

import com.arbolar.WebApp.DAO.Subscriptors;
import com.arbolar.WebApp.Repositories.SubscriptorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@RestController
@RequestMapping("api/v1")
public class SubscriptorsController {
    private SubscriptorRepository subscriptorRepository;
    @Autowired
    public SubscriptorsController(final SubscriptorRepository subscriptorRepository){
        this.subscriptorRepository = subscriptorRepository;
    }

    @GetMapping("/subscriptors")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Subscriptors>> getSubscriptors(){
        List<Subscriptors> allSubscriptors = StreamSupport.stream(subscriptorRepository.findAll().spliterator(),false).collect(Collectors.toList());
        return new ResponseEntity<>(allSubscriptors, HttpStatus.OK);
    }

}
