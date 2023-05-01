package com.carsharingbe.be.service;

import com.carsharingbe.be.model.Driver;
import com.carsharingbe.be.model.UserDriver;
import com.carsharingbe.be.model.Users;
import com.carsharingbe.be.repository.DriverRepository;
import com.carsharingbe.be.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UsersDriverServiceImplementation implements UsersDriverService{

    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private DriverRepository driverRepository;


    @Override
    public Driver getDriverById(int id) {
        return driverRepository.findById(String.valueOf(id)).get();
    }

    @Override
    public Users getUsersByLogin(String login) {
        return usersRepository.findUserByLogin(login);
    }

    @Override
    public Driver saveDriver(UserDriver driver) {
        Users user = new Users(driver.getLogin(),driver.getPassword(),0);
        usersRepository.save(user);
        Driver dr = new Driver("last_insert_id()",driver.getFull_name(),driver.getExperience());
        driverRepository.save(dr);
        Users registered = usersRepository.findUserByLogin(driver.getLogin());
        Driver returned = driverRepository.findById(String.valueOf(registered.getIdusers())).get();
        return returned;
    }


    @Override
    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

    @Override
    public void deleteDriverById(int id) {
        driverRepository.deleteById(String.valueOf(id));
    }

    @Override
    public void deleteUserById(int id) {
        usersRepository.deleteById(String.valueOf(id));
    }
}
