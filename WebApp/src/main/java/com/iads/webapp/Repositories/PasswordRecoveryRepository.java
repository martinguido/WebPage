package com.iads.webapp.Repositories;

import com.iads.webapp.DAOs.PasswordRecovery;
import com.iads.webapp.DAOs.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PasswordRecoveryRepository extends JpaRepository<PasswordRecovery, Long> {
    Optional<PasswordRecovery> findByUser(User user);
}