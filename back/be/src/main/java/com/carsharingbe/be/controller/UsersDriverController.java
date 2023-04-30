package com.carsharingbe.be.controller;

import com.carsharingbe.be.model.Car;
import com.carsharingbe.be.model.Driver;
import com.carsharingbe.be.model.UserDriver;
import com.carsharingbe.be.model.Users;
import com.carsharingbe.be.service.UsersDriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/login")
public class UsersDriverController {

    @Autowired
    private UsersDriverService usersDriverService;

    @PostMapping("/signin")
    public ResponseEntity<Driver> signIn(@RequestBody Users user) {

        try {
            Users dbUser = usersDriverService.getUsersByLogin(user.getLogin());
            if (Objects.equals(dbUser.getPassword(), user.getPassword())) {
                Driver driver = usersDriverService.getDriverById(dbUser.getIdusers());
                return new ResponseEntity<>(driver, HttpStatus.OK);
            } else return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (NullPointerException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @PostMapping("/signup")
    public ResponseEntity<Driver> signUn(@RequestBody UserDriver userDriver) {
        try {
            Users dbUser = usersDriverService.getUsersByLogin(userDriver.getLogin());
            if(dbUser.getLogin().length()>0) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            else{
                Driver driver = usersDriverService.saveDriver(userDriver);
                return new ResponseEntity<>(driver, HttpStatus.OK);
            }
        } catch (NoSuchElementException e) {
            Driver driver = usersDriverService.saveDriver(userDriver);
            return new ResponseEntity<>(driver, HttpStatus.OK);
        } catch (NullPointerException e) {
            Driver driver = usersDriverService.saveDriver(userDriver);
            return new ResponseEntity<>(driver, HttpStatus.OK);
        }

    }
}
