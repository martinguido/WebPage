package com.iads.webapp.Services;

import com.iads.webapp.DAOs.Subscriber;
import com.iads.webapp.DTOs.SubscriberDTO;
import com.iads.webapp.Repositories.SubscriberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SubscriberService {
    private final SubscriberRepository subscriberRepository;

    public List<Subscriber> getAllSubscribers() {return (List<Subscriber>) subscriberRepository.findAll();
    }

    public void createSubscriber(SubscriberDTO subscriberDTO) {
        LocalDateTime fechaHoraActual = LocalDateTime.now();
        Subscriber aNewSubscriber = new Subscriber(subscriberDTO.getName(), subscriberDTO.getMail(), java.sql.Timestamp.valueOf(fechaHoraActual));
        subscriberRepository.save(aNewSubscriber);
    }
    public void saveAll(List<Subscriber> someSubscribers) {
        subscriberRepository.saveAll(someSubscribers);
    }
}
