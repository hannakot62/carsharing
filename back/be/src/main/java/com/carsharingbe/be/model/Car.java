package com.carsharingbe.be.model;

import jakarta.persistence.*;

@Entity
@Table (name="car")
public class Car {
    @Id
    @Column(name = "idcar", nullable = false)
    private String idcar;
 private String model;
 private String location;
 private double experience_start;
 private double price_per_minute;
 private boolean available;

 public Car(String id, String model, String location, double experience_start, double price_per_minute, boolean available) {
  this.idcar = id;
  this.model = model;
  this.location = location;
  this.experience_start = experience_start;
  this.price_per_minute = price_per_minute;
  this.available = available;
 }

 public Car() {
 }

 public String getIdcar() {
  return idcar;
 }

 public void setIdcar(String id) {
  this.idcar = id;
 }

 public String getModel() {
  return model;
 }

 public void setModel(String model) {
  this.model = model;
 }

 public String getLocation() {
  return location;
 }

 public void setLocation(String location) {
  this.location = location;
 }

 public double getExperience_start() {
  return experience_start;
 }

 public void setExperience_start(double experience_start) {
  this.experience_start = experience_start;
 }

 public double getPrice_per_minute() {
  return price_per_minute;
 }

 public void setPrice_per_minute(double price_per_minute) {
  this.price_per_minute = price_per_minute;
 }

 public boolean isAvailable() {
  return available;
 }

 public void setAvailable(boolean available) {
  this.available = available;
 }
}
