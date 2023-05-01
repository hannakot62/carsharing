package com.carsharingbe.be.controller;

import com.carsharingbe.be.model.Fine;
import com.carsharingbe.be.service.FineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/fines")
public class FineController {

    @Autowired
    private FineService fineService;

    @GetMapping("/getAll")
    public List<Fine> getAllFines(){
        return fineService.getAllFines();
    }

    @GetMapping("/{id}")
    public List<Fine> getFinesByDriverId (@PathVariable int id){
        return fineService.getFinesByDriverId(id);
    }

    @DeleteMapping("/{id}")
    public String deleteFineById(@PathVariable int id){
        fineService.deleteFineById(id);
        return "deleted";
    }
}
