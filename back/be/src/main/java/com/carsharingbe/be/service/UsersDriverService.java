package com.carsharingbe.be.service;


import com.carsharingbe.be.model.Driver;
import com.carsharingbe.be.model.UserDriver;
import com.carsharingbe.be.model.Users;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UsersDriverService {
    public Driver getDriverById(int id);
    public Users getUsersByLogin(String login);
    public Driver saveDriver(UserDriver driver);
    public List<Driver> getAllDrivers();
    public void deleteDriverById(int id);
    public void deleteUserById(int id);
}
