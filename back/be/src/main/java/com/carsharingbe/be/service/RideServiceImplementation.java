package com.carsharingbe.be.service;

import com.carsharingbe.be.model.Ride;
import com.carsharingbe.be.repository.RideRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RideServiceImplementation implements RideService {

    @Autowired
    private RideRepository rideRepository;

    @Override
    public List<Ride> getAllRides() {
        return rideRepository.findAll();
    }

    @Override
    public List<Ride> getRidesByDriverId(int id) {
        return rideRepository.findRidesByDriverId(id);
    }

    @Override
    public Ride saveRide(Ride ride) {
        System.out.println(ride);
        return rideRepository.save(ride);
    }

    @Override
    public void deleteById(int id) {
        rideRepository.deleteById(String.valueOf(id));
    }
}
