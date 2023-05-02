package com.carsharingbe.be.controller;

import com.carsharingbe.be.model.Ride;
import com.carsharingbe.be.service.RideService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/rides")
public class RideController {

    @Autowired
    private RideService rideService;

    @GetMapping("/getAll")
    public List<Ride> getAll(){
        return rideService.getAllRides();
    }
    @GetMapping("/{id}")
    public List<Ride> getRidesByDriverId(@PathVariable int id){
        return  rideService.getRidesByDriverId(id);
    }

    @PostMapping("/add")
    public String add(@RequestBody Ride ride){
        System.out.println(ride.getEnd_time());
        rideService.saveRide(ride);
        return "new ride added";
    }

    @DeleteMapping("/{id}")
    public void deleteRideById (@PathVariable int id){
        rideService.deleteById(id);
    }
}
