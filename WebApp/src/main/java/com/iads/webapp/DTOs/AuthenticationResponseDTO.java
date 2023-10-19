package com.iads.webapp.DTOs;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.iads.webapp.DAOs.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponseDTO {

    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("refresh_token")
    private String refreshToken;

    @JsonProperty("email")
    private String email;

    @JsonProperty("role")
    private Role role;
}
