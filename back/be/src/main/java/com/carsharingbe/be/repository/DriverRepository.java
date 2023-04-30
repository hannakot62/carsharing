package com.carsharingbe.be.repository;

import com.carsharingbe.be.model.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository

public interface DriverRepository extends JpaRepository<Driver,String> {

}
