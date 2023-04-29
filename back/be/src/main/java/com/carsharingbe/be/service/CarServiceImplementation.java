package com.carsharingbe.be.service;

import com.carsharingbe.be.model.Car;
import com.carsharingbe.be.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceImplementation implements CarService{

    @Autowired
    private CarRepository carRepository;


    @Override
    public Car saveCar(Car car) {
        return carRepository.save(car);
    }

    @Override
    public Car getCarById(String id) {
        return carRepository.findById(id).get();
    }

    @Override
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @Override
    public void deleteCarById(String id) {
      carRepository.deleteById(id);
        return;
    }
}
