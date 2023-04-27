package com.iads.webapp.Controllers;

import com.iads.webapp.DAOs.Subscriber;
import com.iads.webapp.DTOs.SubscriberDTO;
import com.iads.webapp.Services.SubscriberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/v1")
public class SubscriberController {
    private SubscriberService subscriberService;
    public SubscriberController(SubscriberService subscriberService) {
        this.subscriberService = subscriberService;
    }
    @GetMapping("/subscriptores")
    public ResponseEntity<List<Subscriber>> getRequests(){
        List <Subscriber> allSubscribers = subscriberService.getAllSubscribers();
        return new ResponseEntity<>( allSubscribers, HttpStatus.OK);
    }
    @PostMapping("/subscriptores/subscribirse")
    public ResponseEntity<SubscriberDTO> createRequest(@RequestBody SubscriberDTO newSubscriberDTO ){
        System.out.println(newSubscriberDTO);
        subscriberService.createSubscriber(newSubscriberDTO);
        return new ResponseEntity<>(newSubscriberDTO, HttpStatus.OK);
    }
}
