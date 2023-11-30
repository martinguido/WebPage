package com.iads.webapp.Services;

import com.iads.webapp.DAOs.Request;
import com.iads.webapp.DTOs.RequestDTO;
import com.iads.webapp.Repositories.RequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RequestService {
    private final RequestRepository requestRepository;

    public List<Request> getAllRequests(){
        return requestRepository.findAll();
    }
    public void createRequest(RequestDTO requestDTO) {
        Request aNewRequest = new Request(requestDTO.getName(), requestDTO.getMail(), requestDTO.getRequest(), requestDTO.getRequestDate(), requestDTO.getStatus());
        requestRepository.save(aNewRequest);
    }
    public void saveAll(List<Request> someRequests) {
        requestRepository.saveAll(someRequests);
    }

    public Request getById(Long idRequest) {
        return requestRepository.findById(idRequest).get();
    }
    public Request updateRequest(Request aRequest){
        aRequest.setStatus("Cerrado");
        requestRepository.save(aRequest);
        return aRequest;
    }
}
