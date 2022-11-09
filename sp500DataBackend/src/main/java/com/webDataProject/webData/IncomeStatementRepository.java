package com.webDataProject.webData;

import org.springframework.data.repository.CrudRepository;
import java.util.List;
public interface IncomeStatementRepository extends CrudRepository<IncomeStatement, IncomeStatementId> {
    List<IncomeStatement> findByTicker(String ticker);
}