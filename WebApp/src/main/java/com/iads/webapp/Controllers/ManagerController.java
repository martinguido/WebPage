package com.iads.webapp.Controllers;

import com.iads.webapp.DAOs.Request;
import com.iads.webapp.DAOs.Subscriber;
import com.iads.webapp.DTOs.UserIdDTO;
import com.iads.webapp.Services.RequestService;
import com.iads.webapp.Services.SubscriberService;
import com.iads.webapp.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/v1/manager")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ManagerController {

    private RequestService requestService;
    private SubscriberService subscriberService;

    private final JavaMailSender emailSender;

    private UserService userService;

    @GetMapping("/consultas")
    public ResponseEntity<List<Request>> getRequests(){
        List <Request> allRequests = requestService.getAllRequests();
        return new ResponseEntity<>( allRequests, HttpStatus.OK);
    }

    @GetMapping("/consultas/actualizarConsulta")
    public ResponseEntity<?> updateRequest(@RequestParam(value = "id") Long idRequest){
        try {
            requestService.updateRequest(requestService.getById(idRequest));
            return ResponseEntity.ok("La consulta con id: " + idRequest + " ha sido actualizada correctamente.");
        } catch (DataAccessException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La consulta con id: " + idRequest + " no existe.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/consultas/actualizarConsulta/{id}")
    public ResponseEntity<?> updateRequestById(@PathVariable("id") Long idRequest){
        try {
            requestService.updateRequest(requestService.getById(idRequest));
            return ResponseEntity.ok("La consulta con id: " + idRequest + " ha sido actualizada correctamente.");
        } catch (DataAccessException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La consulta con id: " + idRequest + " no existe.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/subscriptores")
    public ResponseEntity<List<Subscriber>> getSubscribers(){
        List <Subscriber> allSubscribers = subscriberService.getAllSubscribers();
        return new ResponseEntity<>( allSubscribers, HttpStatus.OK);
    }

    @PutMapping("/validarUsuario")
    public ResponseEntity<?> validateUser(@RequestBody UserIdDTO body) {
        return userService.validateUser(body.getUserId());
    }


}
