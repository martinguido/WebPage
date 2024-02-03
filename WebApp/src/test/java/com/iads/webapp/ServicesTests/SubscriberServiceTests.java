package com.iads.webapp.ServicesTests;

import com.iads.webapp.DAOs.Subscriber;
import com.iads.webapp.DTOs.SubscriberDTO;
import com.iads.webapp.Repositories.SubscriberRepository;
import com.iads.webapp.Services.SubscriberService;
import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class SubscriberServiceTests {

    @InjectMocks
    private SubscriberService subscriberService;

    @Mock
    private SubscriberRepository subscriberRepository;

    @BeforeEach
    public void setUp() {

        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllSubscribers() {
        List<Subscriber> mockSubscribers = new ArrayList<>();
        when(subscriberRepository.findAll()).thenReturn(mockSubscribers);
        List<Subscriber> result = subscriberService.getAllSubscribers();
        assertEquals(mockSubscribers, result);
    }

    @Test
    public void testCreateSubscriber() {
        SubscriberDTO subscriberDTO = new SubscriberDTO("John", "guidomartin7@gmail.com");
        Subscriber expectedSubscriber = new Subscriber(subscriberDTO.getName(), subscriberDTO.getMail(),new Date());

        subscriberService.createSubscriber(subscriberDTO);

        verify(subscriberRepository, times(1)).save(expectedSubscriber);
    }

    @Test
    public void testSaveAll() {

        List<Subscriber> someSubscribers = new ArrayList<>();
        subscriberService.saveAll(someSubscribers);

        verify(subscriberRepository, times(1)).saveAll(someSubscribers);
    }

}
