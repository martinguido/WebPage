package com.iads.webapp.ServicesTests;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.iads.webapp.DAOs.Request;
import com.iads.webapp.DTOs.RequestDTO;
import com.iads.webapp.Repositories.RequestRepository;
import com.iads.webapp.Services.RequestService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class RequestServiceTests {

    @Mock
    private RequestRepository requestRepository;

    @InjectMocks
    private RequestService requestService;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllRequests() {
        List<Request> mockRequests = new ArrayList<>();
        when(requestRepository.findAll()).thenReturn(mockRequests);
        List<Request> result = requestService.getAllRequests();
        assertEquals(mockRequests, result);
    }

    @Test
    public void testCreateRequest() {
        RequestDTO requestDTO = new RequestDTO("John", "john@example.com", "Some request");

        LocalDateTime fechaHoraActual = LocalDateTime.now();
        Request expectedRequest = new Request(requestDTO.getName(), requestDTO.getMail(), requestDTO.getRequest(), java.sql.Timestamp.valueOf(fechaHoraActual));

        requestService.createRequest(requestDTO);

        verify(requestRepository, times(1)).save(expectedRequest);
    }

    @Test
    public void testSaveAllRequests() {
        List<Request> someRequests = new ArrayList<>();
        // Agrega elementos a someRequests según tus necesidades

        requestService.saveAll(someRequests);

        verify(requestRepository, times(1)).saveAll(someRequests);
    }

    @Test
    public void testGetRequestById() throws Exception {
        Long idRequest = 1L;
        Request mockRequest = new Request(/* Configurar el objeto Request simulado */);
        when(requestRepository.findById(idRequest)).thenReturn(java.util.Optional.of(mockRequest));

        Request result = requestService.getById(idRequest);

        assertEquals(mockRequest, result);
    }

    @Test(expected = Exception.class)
    public void testGetRequestByIdException() throws Exception {
        Long idRequest = 1L;
        when(requestRepository.findById(idRequest)).thenReturn(java.util.Optional.empty());
        requestService.getById(idRequest);
    }

    @Test
    public void testUpdateRequest() throws Exception {
        Long idRequest = 1L;
        Request mockRequest = new Request(/* Configurar el objeto Request simulado */);
        when(requestRepository.findById(idRequest)).thenReturn(java.util.Optional.of(mockRequest));

        requestService.updateRequest(idRequest);

        verify(requestRepository, times(1)).save(mockRequest);
    }

    @Test(expected = Exception.class)
    public void testUpdateRequestException() throws Exception {
        Long idRequest = 1L;
        when(requestRepository.findById(idRequest)).thenReturn(java.util.Optional.empty());
        requestService.updateRequest(idRequest);
    }
}
