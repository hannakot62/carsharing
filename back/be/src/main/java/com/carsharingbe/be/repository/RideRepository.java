package com.carsharingbe.be.repository;
import com.carsharingbe.be.model.Ride;
import com.carsharingbe.be.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.NoSuchElementException;

@Repository
public interface RideRepository extends JpaRepository<Ride,String> {

    @Query(value="SELECT * FROM ride WHERE iddriver=?1", nativeQuery = true)
    List<Ride> findRidesByDriverId(int idGiven) throws NoSuchElementException;
}
