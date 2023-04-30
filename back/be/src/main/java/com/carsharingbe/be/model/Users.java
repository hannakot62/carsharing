package com.carsharingbe.be.model;


import jakarta.persistence.*;

@Entity
@Table(name="users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idusers")
    private int idusers;
    @Column(name = "login")
    private String login;
    private String password;
    private int role = 0;


    public Users() {
    }

    public Users(String login, String password, int role) {
        this.login = login;
        this.password = password;
        this.role = role;
    }

    @Override
    public String toString() {
        return "{\n"+
                "id: "+this.idusers+",\n"+
                "login: "+this.login+",\n"+
                "password: "+this.password+"\n}";
    }

    public Users(int idusers, String login, String password, int role) {
        this.idusers = idusers;
        this.login = login;
        this.password = password;
        this.role = role;
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
}
