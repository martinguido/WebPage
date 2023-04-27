package com.iads.webapp.Controllers;

import com.iads.webapp.DAOs.Request;
import com.iads.webapp.DTOs.RequestDTO;
import com.iads.webapp.Services.RequestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/v1")
public class RequestController {
    private RequestService requestService;
    public RequestController(RequestService requestService) {
        this.requestService = requestService;
    }
    @GetMapping ("/consultas")
    public ResponseEntity<List<Request>> getRequests(){
        List <Request> allRequests = requestService.getAllRequests();
        return new ResponseEntity<>( allRequests, HttpStatus.OK);
    }
    @PostMapping("/consultas/enviarConsulta")
    public ResponseEntity<RequestDTO> createRequest(@RequestBody RequestDTO newRequestDTO ){
        System.out.println(newRequestDTO);
        requestService.createRegion(newRequestDTO);
        return new ResponseEntity<>(newRequestDTO, HttpStatus.OK);
    }
}