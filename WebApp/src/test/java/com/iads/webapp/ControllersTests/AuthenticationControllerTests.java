package com.iads.webapp.ControllersTests;

import com.iads.webapp.Controllers.AuthenticationController;
import com.iads.webapp.DAOs.Role;
import com.iads.webapp.DTOs.AuthenticationRequestDTO;
import com.iads.webapp.DTOs.AuthenticationResponseDTO;
import com.iads.webapp.Services.AuthenticationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class AuthenticationControllerTests {

    @InjectMocks
    private AuthenticationController authenticationController;

    @Mock
    private AuthenticationService authenticationService;


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
    public void testAuthenticate_ConflictEmptyPassword()  {

        AuthenticationRequestDTO mockRequest = new AuthenticationRequestDTO("test@example.com", "");
        ResponseEntity<?> response = authenticationController.authenticate(mockRequest);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertEquals(response.getBody(),"La contraseña debe tener por lo menos 8 caracteres, una mayuscula, una minuscula y un numero" );

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
        assertTrue(response.getBody() instanceof String);
        assertEquals("Faltan datos para el login", response.getBody());

    }
}
