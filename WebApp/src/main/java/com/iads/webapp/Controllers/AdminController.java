package com.iads.webapp.Controllers;

import com.iads.webapp.DTOs.UserIdDTO;
import com.iads.webapp.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("api/v1/admin")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AdminController {


    private UserService userService;

    @PutMapping("/validarManager")
    public ResponseEntity<?> validateManager(@RequestBody UserIdDTO body) {
        return userService.validateManager(body.getUserId());
    }

    @PutMapping("/usuarios")
    public ResponseEntity<?> getAllUsers() {
        return userService.getAllUsers();
    }

}
