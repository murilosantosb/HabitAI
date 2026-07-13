package com.habitai_api.Service;

import com.habitai_api.DTOS.users.CreateUserRequestDTO;
import com.habitai_api.Model.User;
import com.habitai_api.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> listUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
       return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));
    }

    public User createUser(CreateUserRequestDTO dto) {
        if(!dto.password().equals(dto.confirmPassword())) {
            throw new IllegalArgumentException("As senhas não são iguais!");
        }

        User user = User.builder()
                .name(dto.name())
                .email(dto.email())
                .password(passwordEncoder.encode(dto.password()))
                .createdAt(LocalDateTime.now())
                .build();

        return userRepository.save(user);
    }
}
