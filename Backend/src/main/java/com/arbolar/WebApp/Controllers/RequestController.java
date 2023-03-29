package com.arbolar.WebApp.Controllers;

import com.arbolar.WebApp.DAO.Request;
import com.arbolar.WebApp.Repositories.RequestRepository;
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
public class RequestController {
    private RequestRepository requestRepository;

    @Autowired
    public RequestController(final RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    @GetMapping("/request")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Request>> getRequests() {
        List<Request> allRequest = StreamSupport.stream(requestRepository.findAll().spliterator(), false).collect(Collectors.toList());
        return new ResponseEntity<>(allRequest, HttpStatus.OK);
    }
}