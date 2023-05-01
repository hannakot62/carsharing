package com.carsharingbe.be.service;

import com.carsharingbe.be.model.Fine;

import java.util.List;

public interface FineService {
    public List<Fine> getAllFines();
    public List<Fine> getFinesByDriverId(int id);
    public void deleteFineById(int id);
}
