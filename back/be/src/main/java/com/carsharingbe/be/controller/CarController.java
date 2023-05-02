package com.carsharingbe.be.controller;

import com.carsharingbe.be.model.Car;
import com.carsharingbe.be.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @PostMapping("/add")
    public String add(@RequestBody Car car) {
        carService.saveCar(car);
        return "New car added";
    }

    @GetMapping("/getAll")
    public List<Car> getAllCars(){
        return carService.getAllCars();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getCarById (@PathVariable String id){
        Car car = carService.getCarById(id);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteCarById(@PathVariable String id){
        carService.deleteCarById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCarById(@RequestBody Car car, @PathVariable String id){
        Car current = carService.getCarById(id);
        System.out.println(id);
        carService.saveCar(car);
        return  new ResponseEntity<>(HttpStatus.OK);
    }
}
