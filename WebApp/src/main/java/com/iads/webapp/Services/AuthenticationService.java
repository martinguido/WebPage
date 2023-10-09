package com.iads.webapp.Services;

import com.iads.webapp.DAOs.Role;
import com.iads.webapp.DAOs.Token;
import com.iads.webapp.DAOs.TokenType;
import com.iads.webapp.DAOs.User;
import com.iads.webapp.DTOs.AuthenticationRequestDTO;
import com.iads.webapp.DTOs.AuthenticationResponseDTO;
import com.iads.webapp.DTOs.RegisterRequestDTO;
import com.iads.webapp.Repositories.TokenRepository;
import com.iads.webapp.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    private final TokenRepository tokenRepository;

    public ResponseEntity<?> register(RegisterRequestDTO request) {
        try {
            if (request.getEmail() == null || request.getPassword() == null || request.getUsername() == null) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Missing data for user registration");
            }
            Optional<User> employeeByUsername = userRepository.findByUsername(request.getUsername());
            Optional<User> employeeByMail = userRepository.findByEmail(request.getEmail());
            if (employeeByUsername.isPresent() || employeeByMail.isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("The user already exists");
            } else {
                User newEmployee = new User();
                newEmployee.setPassword(passwordEncoder.encode(request.getPassword()));
                newEmployee.setEmail(request.getEmail());
                newEmployee.setUsername(request.getUsername());
                newEmployee.setRole(Role.USER);
                userRepository.save(newEmployee);
                String jwtToken = jwtService.generateToken(newEmployee);
                String refreshToken = jwtService.generateRefreshToken(newEmployee);
                saveUserToken(newEmployee, jwtToken);
                AuthenticationResponseDTO authenticationResponseDTO = new AuthenticationResponseDTO(jwtToken,
                        refreshToken, newEmployee.getEmail(), newEmployee.getRole());
                return ResponseEntity.status(HttpStatus.CREATED).body(authenticationResponseDTO);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User CANNOT be created");
        }
    }

    public ResponseEntity<?> authenticate(AuthenticationRequestDTO request) {
        try {
            if (request.getEmail() == null || request.getPassword() == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing data for user login");
            }
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
            String jwtToken = jwtService.generateToken(user);
            String refreshToken = jwtService.generateRefreshToken(user);
            revokeAllUserTokens(user);
            saveUserToken(user, jwtToken);
            AuthenticationResponseDTO authenticationResponseDTO = new AuthenticationResponseDTO(jwtToken, refreshToken,
                    user.getEmail(), user.getRole());
            return ResponseEntity.status(HttpStatus.OK).body(authenticationResponseDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid user credentials");
        }
    }

    private void saveUserToken(User user, String jwtToken) {
        Token token = new Token();
        token.setUser(user);
        token.setToken(jwtToken);
        token.setTokenType(TokenType.BEARER);
        token.setExpired(false);
        token.setRevoked(false);
        tokenRepository.save(token);
    }

    public void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

}