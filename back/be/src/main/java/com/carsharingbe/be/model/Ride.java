package com.carsharingbe.be.model;
import jakarta.persistence.*;


@Entity
@Table(name="ride")
public class Ride {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idride")
    private int idride;
    @Column(name="iddriver")
    private int iddriver;
    @Column(name = "idcar")
    private String idcar;
    @Column(name = "start_point")
    private String start_point;
    @Column(name="end_point")
    private String end_point;
    @Column (name = "start_time")
    private String start_time;
    @Column (name="end_time")
    private String end_time;
    @Column(name="price")
    private double price;


    public Ride() {
    }

    public Ride(int idride, int iddriver, String idcar, String start_point, String end_point, String start_time, String end_time, double price) {
        this.idride = idride;
        this.iddriver = iddriver;
        this.idcar = idcar;
        this.start_point = start_point;
        this.end_point = end_point;
        this.start_time = start_time;
        this.end_time = end_time;
        this.price = price;
    }

    public int getIdride() {
        return idride;
    }

    public void setIdride(int idride) {
        this.idride = idride;
    }

    public int getIddriver() {
        return iddriver;
    }

    public void setIddriver(int iddriver) {
        this.iddriver = iddriver;
    }

    public String getIdcar() {
        return idcar;
    }

    public void setIdcar(String idcar) {
        this.idcar = idcar;
    }

    public String getStart_point() {
        return start_point;
    }

    public void setStart_point(String start_point) {
        this.start_point = start_point;
    }

    public String getEnd_point() {
        return end_point;
    }

    public void setEnd_point(String end_point) {
        this.end_point = end_point;
    }

    public String getStart_time() {
        return start_time;
    }

    public void setStart_time(String start_time) {
        this.start_time = start_time;
    }

    public String getEnd_time() {
        return end_time;
    }

    public void setEnd_time(String end_time) {
        this.end_time = end_time;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
