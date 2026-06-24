package com.habitai_api.Controller;

import com.habitai_api.DTOS.CreateUserRequestDTO;
import com.habitai_api.Model.User;
import com.habitai_api.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/habitai/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> listUsers() {
        return ResponseEntity.ok(userService.listUsers());
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody CreateUserRequestDTO dto) {
        return ResponseEntity.ok(userService.createUser(dto));
    }
}
