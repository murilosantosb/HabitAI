package com.habitai_api.DTOS.users;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateUserRequestDTO(
        @NotBlank(message = "O nome não pode vazio.")
        @Size(min = 3, max = 100)
        String name,
        @NotBlank(message = "O email não pode está vazio.")
        @Email
        String email,
        @NotBlank(message = "A senha não pode está vazia.")
        @Size(min = 6, message = "A senha deve ter no mínimo 6 caracteres.")
        String password,
        @NotBlank(message = "A senha não pode está vazia.")
        @Size(min = 6, message = "A senha deve ter no mínimo 6 caracteres.")
        String confirmPassword
) {
}
