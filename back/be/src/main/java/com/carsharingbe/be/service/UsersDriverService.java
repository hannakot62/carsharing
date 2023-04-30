package com.carsharingbe.be.service;


import com.carsharingbe.be.model.Driver;
import com.carsharingbe.be.model.UserDriver;
import com.carsharingbe.be.model.Users;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

public interface UsersDriverService {
    public Driver getDriverById(int id);
    public Users getUsersByLogin(String login);
    public Driver saveDriver(UserDriver driver);
}
