package com.iads.webapp.Controllers;
import com.iads.webapp.DAOs.Subscriber;
import com.iads.webapp.DTOs.SubscriberDTO;
import com.iads.webapp.Services.SubscriberService;
import jakarta.annotation.PostConstruct;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "*")
public class SubscriberController {
    private SubscriberService subscriberService;
    public SubscriberController(SubscriberService subscriberService) {
        this.subscriberService = subscriberService;
    }

    @PostConstruct
    public void loadSampleSubscribers() throws ParseException {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date date1 = format.parse("2022-05-05T12:12:12");
        Date date2 = format.parse("2023-10-10T12:00:00");
        List <Subscriber> someSampleSubscribers = new ArrayList<>();
        Subscriber sampleSubscriber1 = new Subscriber(1L,"Martin Guido", "guidomartin7@gmail.com", date1);
        someSampleSubscribers.add(sampleSubscriber1);
        Subscriber sampleSubscriber2 = new Subscriber(2L,"Julian Garcia Terna", "juliangt@gmail.com", date2);
        someSampleSubscribers.add(sampleSubscriber2);
        Subscriber sampleSubscriber3 = new Subscriber(3L,"Mario Gieco", "mariogieco@yahoo.com.ar", date1);
        someSampleSubscribers.add(sampleSubscriber3);
        Subscriber sampleSubscriber4 = new Subscriber(4L,"Carlos Garcia", "carlogarcia@hotomail.com", date2);
        someSampleSubscribers.add(sampleSubscriber4);
        Subscriber sampleSubscriber5 = new Subscriber(5L,"Ramon Martinez", "ramonm@gmail.com", date1);
        someSampleSubscribers.add(sampleSubscriber5);
        Subscriber sampleSubscriber6 = new Subscriber(6L,"German Tromso", "germantromso@gmail.com", date2);
        someSampleSubscribers.add(sampleSubscriber6);
        Subscriber sampleSubscriber7 = new Subscriber(7L,"Hernan Signor", "hernansignor@gmail.com", date1);
        someSampleSubscribers.add(sampleSubscriber7);
        Subscriber sampleSubscriber8 = new Subscriber(8L,"Mariano Hernandez", "mariano_h@outlook.com", date2);
        someSampleSubscribers.add(sampleSubscriber8);
        Subscriber sampleSubscriber9 = new Subscriber(9L,"Victoria Bacco", "victoriab170@gmail.com", date1);
        someSampleSubscribers.add(sampleSubscriber9);
        Subscriber sampleSubscriber10 = new Subscriber(10L,"Nicolas Guillermo", "nicog10@hotmail.com.ar", date2);
        someSampleSubscribers.add(sampleSubscriber10);
        Subscriber sampleSubscriber11 = new Subscriber(11L,"Analia Cambea", "ana_cambea@outlook.com", date1);
        someSampleSubscribers.add(sampleSubscriber11);
        Subscriber sampleSubscriber12 = new Subscriber(12L,"Alejandro Fernandez", "alejandro_f@outlook.com.ar", date2);
        someSampleSubscribers.add(sampleSubscriber12);
        Subscriber sampleSubscriber13 = new Subscriber(13L,"Carmen Riccardo", "carmenricc@gmail.com", date1);
        someSampleSubscribers.add(sampleSubscriber13);
        Subscriber sampleSubscriber14 = new Subscriber(14L,"Agustina Vetton", "vetton.agus@yahoo.com", date2);
        someSampleSubscribers.add(sampleSubscriber14);
        Subscriber sampleSubscriber15 = new Subscriber(15L,"Ximena Sanchez", "xime_sanchez@hotmail.com", date1);
        someSampleSubscribers.add(sampleSubscriber15);
        subscriberService.saveAll(someSampleSubscribers);
    }

    @GetMapping("/subscriptores")
    public ResponseEntity<List<Subscriber>> getSubscribers(){
        List <Subscriber> allSubscribers = subscriberService.getAllSubscribers();
        return new ResponseEntity<>( allSubscribers, HttpStatus.OK);
    }
    @PostMapping("/subscriptores/subscribirse")
    public ResponseEntity<SubscriberDTO> createSubscriber(@RequestBody SubscriberDTO newSubscriberDTO ){
        System.out.println(newSubscriberDTO);
        subscriberService.createSubscriber(newSubscriberDTO);
        return new ResponseEntity<>(newSubscriberDTO, HttpStatus.OK);
    }
}
