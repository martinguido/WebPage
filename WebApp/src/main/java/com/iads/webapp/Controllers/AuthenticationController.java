package com.iads.webapp.Controllers;

import com.iads.webapp.DTOs.AuthenticationRequestDTO;
import com.iads.webapp.DTOs.RequestDTO;
import com.iads.webapp.DTOs.SubscriberDTO;
import com.iads.webapp.Services.AuthenticationService;
import com.iads.webapp.Services.RequestService;
import com.iads.webapp.Services.SubscriberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    private final JavaMailSender emailSender;

    private final SubscriberService subscriberService;

    private final RequestService requestService;

    private final String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

    private final String passwordRegex = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$";

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequestDTO request) {
        try {
            if (request.getEmail() == null || request.getPassword() == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Faltan datos para el login");
            } else if (!request.getEmail().matches(emailRegex)) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Formato de mail incorrecto");
            } else if (!request.getPassword().matches(passwordRegex)) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("La contraseña debe tener por lo menos 8 caracteres, una mayuscula, una minuscula y un numero");
            } else {
                return ResponseEntity.status(HttpStatus.OK).body(authenticationService.authenticate(request));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.status(HttpStatus.OK).body("Server is up!");
    }

    @PostMapping("/subscriptores/subscribirse")
    public ResponseEntity<?> createSubscriber(@RequestBody SubscriberDTO newSubscriberDTO) {
        try {
            if (newSubscriberDTO.getMail() == null || newSubscriberDTO.getMail().isEmpty() || !newSubscriberDTO.getMail().matches(emailRegex) || newSubscriberDTO.getName() == null || newSubscriberDTO.getName().isEmpty()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Error al subscribirse");
            } else {
                subscriberService.createSubscriber(newSubscriberDTO);
                SimpleMailMessage email = new SimpleMailMessage();
                email.setTo(newSubscriberDTO.getMail());
                email.setFrom("argentinaiads@hotmail.com");
                email.setSubject("Bienvenido a IADS," + newSubscriberDTO.getName());
                email.setText("Bienvenido a IADS, gracias por querer formar parte! Pronto te mandaremos el Newsletter mensual");
                emailSender.send(email);
                return ResponseEntity.status(HttpStatus.OK).body("Subscripto!");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

    }

    @PostMapping("/consultas/enviarConsulta")
    public ResponseEntity<?> createRequest(@RequestBody RequestDTO newRequestDTO) throws Exception {
        try {
            requestService.createRequest(newRequestDTO);
            return ResponseEntity.status(HttpStatus.OK).body("Request creada con exito!");
        } catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<>("No se pudo enviar la consulta correctamente. Reintentar.", HttpStatus.BAD_REQUEST);
        }
    }
}