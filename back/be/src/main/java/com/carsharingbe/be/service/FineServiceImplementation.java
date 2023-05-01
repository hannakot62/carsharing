package com.carsharingbe.be.service;

import com.carsharingbe.be.model.Fine;
import com.carsharingbe.be.repository.FineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FineServiceImplementation implements FineService{
    @Autowired
    private FineRepository fineRepository;

    @Override
    public List<Fine> getAllFines() {
        return fineRepository.findAll();
    }

    @Override
    public List<Fine> getFinesByDriverId(int id) {
        return fineRepository.findFinesByDriverId(id);
    }

    @Override
    public void deleteFineById(int id) {
        fineRepository.deleteById(String.valueOf(id));
    }
}
