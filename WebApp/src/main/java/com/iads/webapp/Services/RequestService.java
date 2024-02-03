package com.iads.webapp.Services;

import com.iads.webapp.DAOs.Request;
import com.iads.webapp.DTOs.RequestDTO;
import com.iads.webapp.Repositories.RequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RequestService {
    private final RequestRepository requestRepository;

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public void createRequest(RequestDTO requestDTO) {
        Request aNewRequest = new Request(requestDTO.getName(), requestDTO.getMail(), requestDTO.getRequest(), java.sql.Timestamp.valueOf(LocalDateTime.now()));
        requestRepository.save(aNewRequest);
    }

    public void saveAll(List<Request> someRequests) {
        requestRepository.saveAll(someRequests);
    }

    public Request getById(Long idRequest) throws Exception {
        return requestRepository.findById(idRequest).orElseThrow(() -> new Exception("No se encontró la solicitud con ID: " + idRequest));
    }

    public void updateRequest(Long idRequest) throws Exception {
        try {
            Request aRequest = getById(idRequest);
            aRequest.closeStatus();
            requestRepository.save(aRequest);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
