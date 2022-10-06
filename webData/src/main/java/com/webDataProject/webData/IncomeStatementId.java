package com.webDataProject.webData;

import java.io.Serializable;
import java.util.Objects;

public class IncomeStatementId implements Serializable {

	private String date;
	private String ticker;
	
    public IncomeStatementId() {
    }

    public IncomeStatementId(String date, String ticker) {
        this.date = date;
        this.ticker = ticker;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        IncomeStatementId incomeStatement = (IncomeStatementId) o;
        return date.equals(incomeStatement.date) &&
                ticker.equals(incomeStatement.ticker);
    }

    @Override
    public int hashCode() {
        return Objects.hash(date, ticker);
    }
}
