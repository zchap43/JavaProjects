package com.webDataProject.webData;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/api")
public class IncomeStatementsController {
	@Autowired
	private IncomeStatementRepository incomeStatementRepository;
	
   @GetMapping("/incomeStatements/all")
    public Iterable<IncomeStatement> getAllIncomeStatements() {
       System.out.println("Here");
        return incomeStatementRepository.findAll();
    }
    @GetMapping("/incomeStatements/{ticker}")
    public @ResponseBody List<IncomeStatement> getIncomeStatementsByTicker(@PathVariable String ticker) {
         return incomeStatementRepository.findByTicker(ticker);
    }
}