package com.habitai_api.Controller;

import com.habitai_api.DTOS.users.CreateUserRequestDTO;
import com.habitai_api.DTOS.users.DataTokenDTO;
import com.habitai_api.DTOS.users.LoginUserDTO;
import com.habitai_api.Model.User;
import com.habitai_api.Service.TokenService;
import com.habitai_api.Service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/habitai/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @GetMapping
    public ResponseEntity<List<User>> listUsers() {
        return ResponseEntity.ok(userService.listUsers());
    }

    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody CreateUserRequestDTO dto) {
        return ResponseEntity.ok(userService.createUser(dto));
    }

    @PostMapping("/login")
    public ResponseEntity<DataTokenDTO> loginUser(@Valid @RequestBody LoginUserDTO dto) {
        var authenticationToken = new UsernamePasswordAuthenticationToken(dto.email(), dto.password());
        var auth = authenticationManager.authenticate(authenticationToken);

        var tokenJWT = tokenService.generationToken((User) (Objects.requireNonNull(auth.getPrincipal())));

        return ResponseEntity.ok(new DataTokenDTO(tokenJWT));
    }
}
