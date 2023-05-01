package com.carsharingbe.be.model;

import jakarta.persistence.*;

@Entity
@Table(name="fine")
public class Fine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idfine")
    private int idfine;
    @Column(name = "rideid")
    private int rideid;
    @Column(name = "fine_sum")
    private double fine_sum;
    @Column(name = "contents")
    private String contents;
    @Column(name="is_paid")
    private int is_paid;

    public Fine() {
    }

    public Fine(int idfine, int idride, double fine_sum, String contents, int is_paid) {
        this.idfine = idfine;
        this.rideid = idride;
        this.fine_sum = fine_sum;
        this.contents = contents;
        this.is_paid = is_paid;
    }

    public int getIdfine() {
        return idfine;
    }

    public void setIdfine(int idfine) {
        this.idfine = idfine;
    }

    public int getRideid() {
        return rideid;
    }

    public void setRideid(int idride) {
        this.rideid = idride;
    }

    public double getFine_sum() {
        return fine_sum;
    }

    public void setFine_sum(double fine_sum) {
        this.fine_sum = fine_sum;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public int getIs_paid() {
        return is_paid;
    }

    public void setIs_paid(int is_paid) {
        this.is_paid = is_paid;
    }
}
