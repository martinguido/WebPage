package com.iads.webapp.Services;

import com.iads.webapp.DAOs.Subscriber;
import com.iads.webapp.DTOs.SubscriberDTO;
import com.iads.webapp.Repositories.SubscriberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SubscriberService {
    private final SubscriberRepository subscriberRepository;

    public List<Subscriber> getAllSubscribers() {return (List<Subscriber>) subscriberRepository.findAll();
    }

    public void createSubscriber(SubscriberDTO subscriberDTO) {
        Subscriber aNewSubscriber = new Subscriber(subscriberDTO.getName(), subscriberDTO.getMail(), subscriberDTO.getSubscriptionDate());
        subscriberRepository.save(aNewSubscriber);
    }
    public void saveAll(List<Subscriber> someSubscribers) {
        subscriberRepository.saveAll(someSubscribers);
    }
}
