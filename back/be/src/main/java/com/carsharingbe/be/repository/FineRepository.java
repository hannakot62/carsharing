package com.carsharingbe.be.repository;

import com.carsharingbe.be.model.Fine;
import com.carsharingbe.be.model.Ride;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.NoSuchElementException;

@Repository
public interface FineRepository extends JpaRepository<Fine,String> {
    @Query(value="SELECT * FROM fine JOIN ride ON fine.rideid=ride.idride WHERE ride.iddriver = ?1", nativeQuery = true)
    List<Fine> findFinesByDriverId(int idGiven) throws NoSuchElementException;
}
