package com.carsharingbe.be.controller;

import com.carsharingbe.be.model.Driver;
import com.carsharingbe.be.model.Users;
import com.carsharingbe.be.service.UsersDriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/driver")
public class DriverController {

    @Autowired
    private UsersDriverService usersDriverService;

    @GetMapping("/getAll")
    public List<Driver> getAll() {
        return usersDriverService.getAllDrivers();
    }

    @DeleteMapping("/{id}")
    public String deleteDriverById(@PathVariable int id){
        usersDriverService.deleteDriverById(id);
        usersDriverService.deleteUserById(id);
        return "deleted";
    }
}