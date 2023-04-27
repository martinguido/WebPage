package com.iads.webapp.Services;

import com.iads.webapp.DAOs.Subscriber;
import com.iads.webapp.DTOs.SubscriberDTO;
import com.iads.webapp.Repositories.SubscriberRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SubscriberService {
    private SubscriberRepository subscriberRepository;
    public SubscriberService(SubscriberRepository subscriberRepository){this.subscriberRepository = subscriberRepository;}

    public List<Subscriber> getAllSubscribers() {return (List<Subscriber>) subscriberRepository.findAll();
    }

    public void createSubscriber(SubscriberDTO subscriberDTO) {
        Subscriber aNewSubscriber = new Subscriber(subscriberDTO.getName(), subscriberDTO.getMail(), subscriberDTO.getSubscriptionDate());
        subscriberRepository.save(aNewSubscriber);
    }
}
