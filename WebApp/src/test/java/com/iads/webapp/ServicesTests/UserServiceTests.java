package com.iads.webapp.ServicesTests;

import com.iads.webapp.DAOs.Role;
import com.iads.webapp.DAOs.User;
import com.iads.webapp.Repositories.UserRepository;
import com.iads.webapp.Services.UserService;
import org.junit.jupiter.api.Assertions;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class UserServiceTests {
    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {

        MockitoAnnotations.openMocks(this);

        User user1 = new User(1L, "admin", "admin@mail.com", "password1", Role.ADMIN);
        User user2 = new User(2L, "messi2", "messi2@gmail.com", "password123", Role.USER);
        User user3 = new User(3L, "messi3", "messi3@gmail.com", "password123", Role.USER);
        User user4 = new User(4L, "messi4", "messi4@gmail.com", "password123", Role.USER);
        User user5 = new User(5L, "messi4", "messi4@gmail.com", "password123", Role.USER);
        List<User> users = new ArrayList<>();
        users.add(user1);
        users.add(user2);
        users.add(user3);
        when(userRepository.findByEmail("admin@mail.com")).thenReturn(Optional.of(user1));
        when(userRepository.findByUsername("noExistente")).thenReturn(Optional.empty());
        when(userRepository.findById(2L)).thenReturn(Optional.of(user2));
        when(userRepository.findById(4L)).thenReturn(Optional.of(user4));
        when(userRepository.findById(5L)).thenReturn(Optional.of(user5));
        when(userRepository.findById(100L)).thenReturn(Optional.empty());
        when(userRepository.findAll()).thenReturn(users);
    }

    @Test
    public void testUserServiceLoadUserByUsername_UserFound() {

        UserDetails result = userService.loadUserByUsername("admin@mail.com");

        Assertions.assertEquals("password1", result.getPassword());
        verify(userRepository, times(1)).findByEmail("admin@mail.com");

    }

    @Test
    public void testUserServiceLoadUserByUsername_UserNotFound() {

        assertThrows(UsernameNotFoundException.class, () -> {
            userService.loadUserByUsername("noExistente");
        });
        verify(userRepository, times(1)).findByEmail("noExistente");

    }

    @Test
    public void testUserServiceLoadUserByUsername_NullUser() {

        assertThrows(UsernameNotFoundException.class, () -> {
            userService.loadUserByUsername(null);
        });
        verify(userRepository, times(1)).findByEmail(null);

    }


}
