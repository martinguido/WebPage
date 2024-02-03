package com.iads.webapp.ControllersTests;

import com.iads.webapp.Controllers.AuthenticationController;
import com.iads.webapp.DAOs.Role;
import com.iads.webapp.DTOs.AuthenticationRequestDTO;
import com.iads.webapp.DTOs.AuthenticationResponseDTO;
import com.iads.webapp.DTOs.RequestDTO;
import com.iads.webapp.DTOs.SubscriberDTO;
import com.iads.webapp.Services.AuthenticationService;
import com.iads.webapp.Services.RequestService;
import com.iads.webapp.Services.SubscriberService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class AuthenticationControllerTests {

    @InjectMocks
    private AuthenticationController authenticationController;

    @Mock
    private AuthenticationService authenticationService;

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
    public void testAuthenticateSuccess() throws Exception {

        AuthenticationRequestDTO mockRequest = new AuthenticationRequestDTO("test@example.com", "testPassword1");
        AuthenticationResponseDTO mockResponse = new AuthenticationResponseDTO("mockJwtToken", "mockRefreshToken", "test@example.com", Role.USER);
        when(authenticationService.authenticate(any(AuthenticationRequestDTO.class))).thenReturn(mockResponse);
        ResponseEntity<?> response = authenticationController.authenticate(mockRequest);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(response.getBody(), mockResponse);

    }

    @Test
    public void testAuthenticate_ConflictEmptyEmail() {

        AuthenticationRequestDTO mockRequest = new AuthenticationRequestDTO("", "testPassword1");
        ResponseEntity<?> response = authenticationController.authenticate(mockRequest);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertEquals(response.getBody(), "Formato de mail incorrecto");

    }

    @Test
    public void testAuthenticate_ConflictEmptyPassword() {

        AuthenticationRequestDTO mockRequest = new AuthenticationRequestDTO("test@example.com", "");
        ResponseEntity<?> response = authenticationController.authenticate(mockRequest);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertEquals(response.getBody(), "La contraseña debe tener por lo menos 8 caracteres, una mayuscula, una minuscula y un numero");

    }

    @Test
    public void testAuthenticate_ConflictWrongEmailFormat() {

        AuthenticationRequestDTO mockRequest = new AuthenticationRequestDTO("testexample.com", "testPassword1");
        ResponseEntity<?> response = authenticationController.authenticate(mockRequest);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertEquals(response.getBody(), "Formato de mail incorrecto");

    }

    @Test
    public void testAuthenticate_ConflictWrongPasswordFormat() {

        AuthenticationRequestDTO mockRequest = new AuthenticationRequestDTO("test@example.com", "testPassw");
        AuthenticationResponseDTO mockResponse = new AuthenticationResponseDTO("mockJwtToken", "mockRefreshToken", "test@example.com", Role.USER);
        ResponseEntity<?> response = authenticationController.authenticate(mockRequest);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertEquals(response.getBody(), "La contraseña debe tener por lo menos 8 caracteres, una mayuscula, una minuscula y un numero");

    }

    @Test
    public void testAuthenticateFailure() throws Exception {

        AuthenticationRequestDTO mockRequest = new AuthenticationRequestDTO("test@example.com", "testPassword1");
        when(authenticationService.authenticate(any(AuthenticationRequestDTO.class))).thenThrow(new Exception("Invalid user credentials"));
        ResponseEntity<?> response = authenticationController.authenticate(mockRequest);

        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        assertEquals("Invalid user credentials", response.getBody());

    }

    @Test
    public void testAuthenticateMissingData() {

        AuthenticationRequestDTO mockRequest = new AuthenticationRequestDTO(null, "testPassword");
        ResponseEntity<?> response = authenticationController.authenticate(mockRequest);

        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        assertInstanceOf(String.class, response.getBody());
        assertEquals("Faltan datos para el login", response.getBody());

    }

    @Test
    public void testCreateSubscriberSuccess() {

        SubscriberDTO newSubscriberDTO = new SubscriberDTO();
        newSubscriberDTO.setName("John Doe");
        newSubscriberDTO.setMail("john.doe@example.com");
        doNothing().when(subscriberService).createSubscriber(newSubscriberDTO);
        ResponseEntity<?> responseEntity = authenticationController.createSubscriber(newSubscriberDTO);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("Subscripto!", responseEntity.getBody());

    }

    @Test
    public void testCreateSubscriberValidationFailure() {

        SubscriberDTO newSubscriberDTO = new SubscriberDTO();
        newSubscriberDTO.setName("John Doe");
        newSubscriberDTO.setMail("invalid-email");
        ResponseEntity<?> responseEntity = authenticationController.createSubscriber(newSubscriberDTO);

        assertEquals(HttpStatus.CONFLICT, responseEntity.getStatusCode());
        assertEquals("Error al subscribirse", responseEntity.getBody());

    }

    @Test
    public void testCreateSubscriberServiceFailure() {

        SubscriberDTO newSubscriberDTO = new SubscriberDTO();
        newSubscriberDTO.setName("John Doe");
        newSubscriberDTO.setMail("john.doe@example.com");
        doThrow(new RuntimeException("Error en el servicio")).when(subscriberService).createSubscriber(newSubscriberDTO);
        ResponseEntity<?> responseEntity = authenticationController.createSubscriber(newSubscriberDTO);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals("Error en el servicio", responseEntity.getBody());

    }

    @Test
    public void testCreateRequestSuccess() throws Exception {

        RequestDTO newRequestDTO = new RequestDTO("John", "example@gmail.com", "RequestExample");
        doNothing().when(requestService).createRequest(newRequestDTO);
        ResponseEntity<?> responseEntity = authenticationController.createRequest(newRequestDTO);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("Request creada con exito!", responseEntity.getBody());

    }

    @Test
    public void testCreateRequestFailure() throws Exception {

        RequestDTO newRequestDTO = new RequestDTO("John", "example@gmail.com", "RequestExample");
        doThrow(new RuntimeException("Error en el servicio")).when(requestService).createRequest(newRequestDTO);
        Exception exception = assertThrows(Exception.class, () -> {
            authenticationController.createRequest(newRequestDTO);
        });

        assertEquals("Error en el servicio", exception.getMessage());
    }
}
