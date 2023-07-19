package com.example.springapp.repository.car;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.springapp.model.car.CarFind;

public interface CarFindRepo extends JpaRepository<CarFind, Long> {

    @Query("SELECT c FROM CarFind c WHERE c.location = :location AND c.seatCount = :seat")
	static
    List<CarFind> findAllByCondition(@Param("location") String location, @Param("seat") Integer seat) {
		return null;
	}
}
		

	


