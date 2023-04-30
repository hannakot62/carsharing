package com.carsharingbe.be.model;

public class UserDriver {
    private int idusers;
    private String login;
    private String password;
    private int role = 0;
    private String full_name;
    private double experience;

    public UserDriver() {
    }

    public UserDriver(int idusers, String login, String password, int role, String full_name, double experience) {
        this.idusers = idusers;
        this.login = login;
        this.password = password;
        this.role = role;
        this.full_name = full_name;
        this.experience = experience;
    }

    public int getIdusers() {
        return idusers;
    }

    public void setIdusers(int idusers) {
        this.idusers = idusers;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
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
