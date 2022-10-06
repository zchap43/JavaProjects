package com.webDataProject.webData;
import org.springframework.data.repository.CrudRepository;
import com.webDataProject.webData.IncomeStatement;
import org.springframework.stereotype.Repository;
import com.webDataProject.webData.IncomeStatementId;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Date;
// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
public interface IncomeStatementRepository extends CrudRepository<IncomeStatement, IncomeStatementId> {
    List<IncomeStatement> findByTicker(String ticker);
    List<IncomeStatement> findByDate(String day);
    List<IncomeStatement> findByDateAndTicker(String day, String ticker);
}