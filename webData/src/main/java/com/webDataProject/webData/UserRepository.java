package com.webDataProject.webData;
import org.springframework.data.repository.CrudRepository;
import com.webDataProject.webData.User;
import org.springframework.stereotype.Repository;
import com.webDataProject.webData.StockId;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Date;
// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
public interface UserRepository extends CrudRepository<User, StockId> {
    List<User> findByTicker(String ticker);
    List<User> findByDate(String day);
    List<User> findByDateAndTicker(String day, String ticker);
    // Query to filter down by dates
    @Query(value = "select * from prices where ticker = :ticker AND day BETWEEN :startDate AND :endDate ", nativeQuery = true)
    List<User> getAllBetweenDatesAndTicker(@Param("ticker") String ticker, @Param("startDate") String startDate, @Param("endDate") String endDate);
}