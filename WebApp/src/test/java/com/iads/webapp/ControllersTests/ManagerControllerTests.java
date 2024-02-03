package com.iads.webapp.ControllersTests;

import com.iads.webapp.Controllers.AuthenticationController;
import com.iads.webapp.Controllers.ManagerController;
import com.iads.webapp.DAOs.Request;
import com.iads.webapp.DAOs.Subscriber;
import com.iads.webapp.Services.AuthenticationService;
import com.iads.webapp.Services.RequestService;
import com.iads.webapp.Services.SubscriberService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class ManagerControllerTests {
    @InjectMocks
    private ManagerController managerController;

    @Mock
    private JavaMailSender emailSender;

    @Mock
    private SubscriberService subscriberService;

    @Mock
    private RequestService requestService;


    @BeforeEach
    public void setUp() {

        MockitoAnnotations.openMocks(this);

    }


    @Test
    public void testGetRequests() {

        List<Request> mockRequests = new ArrayList<>();
        when(requestService.getAllRequests()).thenReturn(mockRequests);
        ResponseEntity<List<Request>> responseEntity = managerController.getRequests();

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(mockRequests, responseEntity.getBody());

    }

    @Test
    public void testGetRequestsEmptyList() {

        List<Request> mockRequests = new ArrayList<>();
        when(requestService.getAllRequests()).thenReturn(mockRequests);
        ResponseEntity<List<Request>> responseEntity = managerController.getRequests();

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(mockRequests, responseEntity.getBody());

    }

    @Test
    public void testUpdateRequestByIdSuccess() throws Exception {
        Long idRequest = 1L;
        doNothing().when(requestService).updateRequest(idRequest);
        ResponseEntity<?> responseEntity = managerController.updateRequestById(idRequest);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("La consulta con id: " + idRequest + " ha sido actualizada correctamente.", responseEntity.getBody());
    }

    @Test
    public void testUpdateRequestByIdNotFound() throws Exception {
        Long idRequest = 1L;
        doThrow(new DataAccessException("Consulta no encontrada") {}).when(requestService).updateRequest(idRequest);
        ResponseEntity<?> responseEntity = managerController.updateRequestById(idRequest);
        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals("La consulta con id: " + idRequest + " no existe.", responseEntity.getBody());
    }

    @Test
    public void testUpdateRequestByIdServerError() throws Exception {
        Long idRequest = 1L;
        doThrow(new RuntimeException("Error interno")).when(requestService).updateRequest(idRequest);
        ResponseEntity<?> responseEntity = managerController.updateRequestById(idRequest);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
    }

    @Test
    public void testGetSubscribers() {
        List<Subscriber> mockSubscribers = new ArrayList<>();
        when(subscriberService.getAllSubscribers()).thenReturn(mockSubscribers);
        ResponseEntity<List<Subscriber>> responseEntity = managerController.getSubscribers();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(mockSubscribers, responseEntity.getBody());
    }

    @Test
    public void testGetSubscribersEmptyList() {
        List<Subscriber> mockSubscribers = new ArrayList<>();
        when(subscriberService.getAllSubscribers()).thenReturn(mockSubscribers);
        ResponseEntity<List<Subscriber>> responseEntity = managerController.getSubscribers();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(mockSubscribers, responseEntity.getBody());
    }


}
