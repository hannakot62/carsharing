package com.carsharingbe.be.service;

import com.carsharingbe.be.model.Driver;
import com.carsharingbe.be.model.UserDriver;
import com.carsharingbe.be.model.Users;
import com.carsharingbe.be.repository.DriverRepository;
import com.carsharingbe.be.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


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
        Driver dr = new Driver(driver.getIdusers(),driver.getFull_name(),driver.getExperience());
        Users user = new Users(driver.getIdusers(),driver.getLogin(),driver.getPassword(),0);
        driverRepository.save(dr);
        usersRepository.save(user);
        return dr;
    }
}
