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
@CrossOrigin(origins = "http://localhost:3000")
public class RequestController {
    private RequestService requestService;
    public RequestController(RequestService requestService) {
        this.requestService = requestService;
    }
    @GetMapping ("/consultas")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Request>> getRequests(){
        List <Request> allRequests = requestService.getAllRequests();
        return new ResponseEntity<>( allRequests, HttpStatus.OK);
    }
    @PostMapping("/consultas/enviarConsulta")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> createRequest(@RequestBody RequestDTO newRequestDTO) throws Exception{
        try {
            requestService.createRequest(newRequestDTO);
            return new ResponseEntity<>(newRequestDTO, HttpStatus.OK);
        }
        catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<>("No se pudo enviar la consulta correctamente. Reintentar.",HttpStatus.BAD_REQUEST);
        }
    }
}