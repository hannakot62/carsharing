package com.carsharingbe.be.model;

import jakarta.persistence.*;


@Entity
@Table(name="driver")
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String iddriver;
    private String full_name;
    private double experience;


    public Driver() {
    }

    public Driver(String full_name, double experience) {
        this.full_name = full_name;
        this.experience = experience;
    }

    @Override
    public String toString() {
        return this.full_name;
    }

    public Driver(String iddriver, String full_name, double experience) {
        this.iddriver = iddriver;
        this.full_name = full_name;
        this.experience = experience;
    }


    public String getIddriver() {
        return iddriver;
    }

    public void setIddriver(String iddriver) {
        this.iddriver = iddriver;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public double getExperience() {
        return experience;
    }

    public void setExperience(double experience) {
        this.experience = experience;
    }
}
