package com.carsharingbe.be.service;

import com.carsharingbe.be.model.Ride;

import java.util.List;

public interface RideService {
    public List<Ride> getAllRides();
    public List<Ride> getRidesByDriverId(int id);
    public Ride saveRide(Ride ride);
    public void deleteById(int id);
}
