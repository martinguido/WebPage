package com.iads.webapp.Services;

import com.iads.webapp.DAOs.Request;
import com.iads.webapp.DTOs.RequestDTO;
import com.iads.webapp.Repositories.RequestRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RequestService {
    private RequestRepository requestRepository;
    public RequestService(RequestRepository requestRepository){this.requestRepository = requestRepository;}

    public List<Request> getAllRequests(){
        return requestRepository.findAll();
    }
    public void createRequest(RequestDTO requestDTO) {
        Request aNewRequest = new Request(requestDTO.getName(), requestDTO.getMail(), requestDTO.getRequest(), requestDTO.getRequestDate(), requestDTO.getStatus());
        requestRepository.save(aNewRequest);
    }
}
