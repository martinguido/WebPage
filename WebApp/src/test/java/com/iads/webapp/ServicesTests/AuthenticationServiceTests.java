package com.iads.webapp.ServicesTests;

import com.iads.webapp.DAOs.Role;
import com.iads.webapp.DAOs.Token;
import com.iads.webapp.DAOs.User;
import com.iads.webapp.DTOs.AuthenticationRequestDTO;
import com.iads.webapp.DTOs.RegisterRequestDTO;
import com.iads.webapp.Exceptions.UserAlreadyExistsException;
import com.iads.webapp.Repositories.TokenRepository;
import com.iads.webapp.Repositories.UserRepository;
import com.iads.webapp.Services.AuthenticationService;
import com.iads.webapp.Services.JwtService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class AuthenticationServiceTests {
    @InjectMocks
    private AuthenticationService authenticationService;

    @Mock
    private UserRepository userRepository;
    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private JwtService jwtService;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private TokenRepository tokenRepository;

    @BeforeEach
    public void setUp() {

        MockitoAnnotations.openMocks(this);

        User newEmployee = User.builder().username("martincito").password(passwordEncoder.encode("password")).role(Role.USER).build();
//        newEmployee.setUsername("martincito");
//        newEmployee.setPassword(passwordEncoder.encode("password"));
//        newEmployee.setRole(Role.EMPLOYEE);
        when(userRepository.findByEmail("ramon@gmail.com")).thenReturn(Optional.empty());
        when(userRepository.findByEmail("ramon2@gmail.com")).thenReturn(Optional.ofNullable(newEmployee));
        when(userRepository.findByUsername("martincito")).thenReturn(Optional.empty());
        when(userRepository.findByUsername("martincito2")).thenReturn(Optional.ofNullable(newEmployee));
        when(jwtService.generateToken(newEmployee)).thenReturn("SomeJWT");
    }


    @Test
    public void testAuthenticationServiceRegisterEmployee() throws Exception {

        RegisterRequestDTO newRegisterRequest = new RegisterRequestDTO("martincito", "ramon@gmail.com", "password");

        assertEquals("ramon@gmail.com", authenticationService.register(newRegisterRequest).getEmail());
        assertEquals(Role.USER, authenticationService.register(newRegisterRequest).getRole());

    }


    @Test
    public void testAuthenticationServiceRegisterEmployee_DuplicatedUsername() {

        RegisterRequestDTO existingRegisterRequest = new RegisterRequestDTO("martincito2", "ramon@gmail.com", "password");

        UserAlreadyExistsException exception = assertThrows(UserAlreadyExistsException.class, () -> {
            authenticationService.register(existingRegisterRequest);
        });
        assertEquals("User already exists", exception.getMessage());

    }

    @Test
    public void testAuthenticationServiceRegisterEmployee_DuplicatedEmail() {

        RegisterRequestDTO existingRegisterRequest = new RegisterRequestDTO("martincito", "ramon2@gmail.com", "password");

        UserAlreadyExistsException exception = assertThrows(UserAlreadyExistsException.class, () -> {
            authenticationService.register(existingRegisterRequest);
        });
        assertEquals("User already exists", exception.getMessage());

    }

    @Test
    void testAuthenticationServiceRegisterEmployee_RuntimeException() {

        doThrow(new RuntimeException("Simulated random exception")).when(userRepository).save(any());
        RegisterRequestDTO request = new RegisterRequestDTO("usuario", "correo@ejemplo.com", "contrasena");

        Exception exception = assertThrows(Exception.class, () -> {
            authenticationService.register(request);
        });
        assertEquals("User CANNOT be created", exception.getMessage());

    }

    @Test
    public void testAuthenticationServiceAuthenticateUser() throws Exception {

        AuthenticationRequestDTO authenticationRequestDTO = new AuthenticationRequestDTO("exampleUser", "examplePassword");
        User user = new User();
        user.setEmail("exampleUser");
        user.setPassword("examplePassword");
        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class))).thenReturn(mock(Authentication.class));
        when(userRepository.findByEmail(authenticationRequestDTO.getEmail())).thenReturn(Optional.of(user));
        when(jwtService.generateToken(user)).thenReturn("exampleToken");
        when(jwtService.generateRefreshToken(user)).thenReturn("exampleRefreshToken");

        assertEquals("exampleToken", authenticationService.authenticate(authenticationRequestDTO).getAccessToken());
        assertEquals("exampleRefreshToken", authenticationService.authenticate(authenticationRequestDTO).getRefreshToken());

    }

    @Test
    public void testAuthenticationServiceAuthenticateUser_InvalidCredentials() {

        AuthenticationRequestDTO authenticationRequestDTO = new AuthenticationRequestDTO("invalidUser", "invalidPassword");
        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class))).thenThrow(new AuthenticationException("Invalid user credentials") {
        });

        Exception exception = assertThrows(Exception.class, () -> {
            authenticationService.authenticate(authenticationRequestDTO);
        });
        assertEquals("Invalid user credentials", exception.getMessage());

    }


    @Test
    public void testRevokeAllUserTokens_Empty() {

        TokenRepository tokenRepository = mock(TokenRepository.class);
        User user = new User();
        List<Token> validTokens = new ArrayList<>();
        when(tokenRepository.findAllValidTokenByUser(user.getId())).thenReturn(validTokens);
        authenticationService.revokeAllUserTokens(user);

        for (Token token : validTokens) {
            Assertions.assertTrue(token.isRevoked());
            Assertions.assertTrue(token.isExpired());
        }

    }

    @Test
    public void testRevokeAllUserTokens() {

        User user = User.builder().id(1L).build();
        Token token1 = Token.builder().id(1L).revoked(false).expired(false).build();
        Token token2 = Token.builder().id(2L).revoked(false).expired(false).build();
        List<Token> validTokens = new ArrayList<>();
        validTokens.add(token1);
        validTokens.add(token2);

        when(tokenRepository.findAllValidTokenByUser(user.getId())).thenReturn(validTokens);
        authenticationService.revokeAllUserTokens(user);
        for (Token token : validTokens) {
            Assertions.assertTrue(token.isRevoked());
            Assertions.assertTrue(token.isExpired());
        }
        verify(tokenRepository, times(1)).saveAll(validTokens);
    }
}
