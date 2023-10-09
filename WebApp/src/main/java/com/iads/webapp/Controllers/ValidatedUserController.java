package com.iads.webapp.Controllers;

import com.iads.webapp.DTOs.RequestDTO;
import com.iads.webapp.DTOs.SubscriberDTO;
import com.iads.webapp.Services.RequestService;
import com.iads.webapp.Services.SubscriberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/validatedUser")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ValidatedUserController {

    private RequestService requestService;
    private SubscriberService subscriberService;

    private final JavaMailSender emailSender;
    @PostMapping("/consultas/enviarConsulta")
    public ResponseEntity<?> createRequest(@RequestBody RequestDTO newRequestDTO) {
        try {
            requestService.createRequest(newRequestDTO);
            return new ResponseEntity<>(newRequestDTO, HttpStatus.OK);
        }
        catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<>("No se pudo enviar la consulta correctamente. Reintentar.",HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/subscriptores/subscribirse")
    public ResponseEntity<SubscriberDTO> createSubscriber(@RequestBody SubscriberDTO newSubscriberDTO ){
        String mail = newSubscriberDTO.getMail();
        String name = newSubscriberDTO.getName();
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(mail);
        email.setFrom("argentinaiads@hotmail.com");
        email.setSubject("Bienvenido a IADS," + name);
        email.setText("Bienvenido a IADS, gracias por querer formar parte! Pronto te mandaremos el Newsletter mensual");
        emailSender.send(email);
        subscriberService.createSubscriber(newSubscriberDTO);
        return new ResponseEntity<>(newSubscriberDTO, HttpStatus.OK);
    }
}
