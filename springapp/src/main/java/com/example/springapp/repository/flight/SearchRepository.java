package com.example.springapp.repository.flight;
import com.example.springapp.model.flight.Search;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface SearchRepository extends JpaRepository<Search,Long> {
    @Query("SELECT f FROM Search f WHERE f.departure = :departure AND f.arrival = :arrival AND f.dept_date = :dept_date")
    List<Search> findAllByCondition(@Param("departure") String departure, @Param("arrival") String arrival , 
    @Param("dept_date") LocalDate dept_date);
}
