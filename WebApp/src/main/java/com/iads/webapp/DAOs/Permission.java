package com.iads.webapp.DAOs;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),
    MANAGER_READ("manager:read"),
    MANAGER_UPDATE("manager:update"),
    MANAGER_CREATE("manager:create"),
    MANAGER_DELETE("manager:delete"),
    VALIDATEDUSER_READ("validateduser:read"),
    VALIDATEDUSER_UPDATE("validateduser:update"),
    VALIDATEDUSER_CREATE("validateduser:create"),
    VALIDATEDUSER_DELETE("validateduser:delete"),
    USER_READ("user:read"),
    USER_UPDATE("user:update"),
    USER_CREATE("user:create"),
    USER_DELETE("user:delete")
    ;
    @Getter
    private final String permission;
}