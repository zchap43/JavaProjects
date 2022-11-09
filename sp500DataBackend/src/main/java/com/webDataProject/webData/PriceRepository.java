package com.webDataProject.webData;

import org.springframework.data.repository.CrudRepository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PriceRepository extends CrudRepository<Price, PriceId> {
    List<Price> findByTicker(String ticker);
    List<Price> findByDate(String day);
    List<Price> findByDateAndTicker(String day, String ticker);
    @Query(value = "select * from prices where ticker = :ticker AND day BETWEEN :startDate AND :endDate ", nativeQuery = true)
    List<Price> getAllBetweenDatesAndTicker(@Param("ticker") String ticker, @Param("startDate") String startDate, @Param("endDate") String endDate);
}