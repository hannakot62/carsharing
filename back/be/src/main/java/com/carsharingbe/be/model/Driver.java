package com.carsharingbe.be.model;

import jakarta.persistence.*;


@Entity
@Table(name="driver")
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int iddriver;
    private String full_name;
    private double experience;


    public Driver() {
    }

    @Override
    public String toString() {
        return this.full_name;
    }

    public Driver(int iddriver, String full_name, double experience) {
        this.iddriver = iddriver;
        this.full_name = full_name;
        this.experience = experience;
    }

    public int getIddriver() {
        return iddriver;
    }

    public void setIddriver(int iddriver) {
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
