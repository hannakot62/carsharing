package com.carsharingbe.be.service;

import com.carsharingbe.be.model.Car;

import java.util.List;


public interface CarService {

    public Car saveCar (Car car);
    public List<Car> getAllCars();
    public Car getCarById(String id);
    public void deleteCarById(String id);
}
