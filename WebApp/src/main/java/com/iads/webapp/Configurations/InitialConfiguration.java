package com.iads.webapp.Configurations;

import com.iads.webapp.DAOs.Role;
import com.iads.webapp.DAOs.User;
import com.iads.webapp.DTOs.RegisterRequestDTO;
import com.iads.webapp.Repositories.UserRepository;
import com.iads.webapp.Services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class InitialConfiguration {

    @Bean
    public CommandLineRunner commandLineRunner(AuthenticationService authenticationService, UserRepository userRepository) {
        return args -> {
            RegisterRequestDTO admin = new RegisterRequestDTO();
            admin.setUsername("admin");
            admin.setEmail("admin@mail.com");
            admin.setPassword("Password1");
            authenticationService.register(admin);
            User createdAdmin = userRepository.findByEmail(admin.getEmail()).get();
            createdAdmin.setRole(Role.ADMIN);
            userRepository.save(createdAdmin);
//            addSampleEmployees(authenticationService, userRepository);
        };
    }

//    private void addSampleEmployees(AuthenticationService authenticationService, UserRepository userRepository) throws Exception {
//        RegisterRequestDTO user00 = RegisterRequestDTO.builder().username("martinguido0").email("guidomartin7@gmail.com").password("Password1").build();
//        authenticationService.register(user00);
//        User user00Created = userRepository.findByEmail(user00.getEmail()).get();
//        user00Created.setRole(Role.MANAGER);
//        userRepository.save(user00Created);
//        RegisterRequestDTO user0 = RegisterRequestDTO.builder().username("martinguido").email("martinguido@gmail.com").password("Password1").build();
//        authenticationService.register(user0);
//        User user0Created = userRepository.findByEmail(user0.getEmail()).get();
//        user0Created.setRole(Role.MANAGER);
//        userRepository.save(user0Created);
//        RegisterRequestDTO user1 = RegisterRequestDTO.builder().username("john_smith").email("john.smith@example.com").password("Password1").build();
//        authenticationService.register(user1);
//        User user1Created = userRepository.findByEmail(user1.getEmail()).get();
//        user1Created.setRole(Role.MANAGER);
//        userRepository.save(user1Created);
//        RegisterRequestDTO user2 = RegisterRequestDTO.builder().username("sarah_jones").email("sarah.jones@example.com").password("Password1").build();
//        authenticationService.register(user2);
//        User user2Created = userRepository.findByEmail(user2.getEmail()).get();
//        user2Created.setRole(Role.MANAGER);
//        userRepository.save(user2Created);
//        RegisterRequestDTO user3 = RegisterRequestDTO.builder().username("michael_davis").email("michael.davis@example.com").password("Password1").build();
//        authenticationService.register(user3);
//        RegisterRequestDTO user4 = RegisterRequestDTO.builder().username("emily_wilson").email("emily.wilson@example.com").password("Password1").build();
//        authenticationService.register(user4);
//        RegisterRequestDTO user5 = RegisterRequestDTO.builder().username("david_johnson").email("david.johnson@example.com").password("Password1").build();
//        authenticationService.register(user5);
//        RegisterRequestDTO user6 = RegisterRequestDTO.builder().username("jane_doe").email("jane.doe@example.com").password("Password1").build();
//        authenticationService.register(user6);
//    }



}
