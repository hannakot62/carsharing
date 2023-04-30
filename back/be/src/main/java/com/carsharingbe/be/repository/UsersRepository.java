package com.carsharingbe.be.repository;

import com.carsharingbe.be.model.Car;
import com.carsharingbe.be.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.NoSuchElementException;


@Repository
public interface UsersRepository extends JpaRepository<Users,String> {

    @Query(value="SELECT * FROM users WHERE login=?1", nativeQuery = true)
    Users findUserByLogin(String loginGiven) throws NoSuchElementException;
}
