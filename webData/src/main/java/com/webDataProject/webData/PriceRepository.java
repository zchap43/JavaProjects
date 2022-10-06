package com.webDataProject.webData;
import org.springframework.data.repository.CrudRepository;
import com.webDataProject.webData.Price;
import org.springframework.stereotype.Repository;
import com.webDataProject.webData.PriceId;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Date;
// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
public interface PriceRepository extends CrudRepository<Price, PriceId> {
    List<Price> findByTicker(String ticker);
    List<Price> findByDate(String day);
    List<Price> findByDateAndTicker(String day, String ticker);
    // Query to filter down by dates
    @Query(value = "select * from prices where ticker = :ticker AND day BETWEEN :startDate AND :endDate ", nativeQuery = true)
    List<Price> getAllBetweenDatesAndTicker(@Param("ticker") String ticker, @Param("startDate") String startDate, @Param("endDate") String endDate);
}