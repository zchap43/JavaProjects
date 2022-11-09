package com.webDataProject.webData;

import java.io.Serializable;
import java.util.Objects;

public class IncomeStatementId implements Serializable {

	public String date;
	public String ticker;
    public IncomeStatementId(String date, String ticker) {
        this.date = date;
        this.ticker = ticker;
    }
    public IncomeStatementId() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        IncomeStatementId incomeStatementId = (IncomeStatementId) o;
        System.out.println("Checking Values");
        return date.equals(incomeStatementId.date) &&
                ticker.equals(incomeStatementId.ticker);
    }

    @Override
    public int hashCode() {
        return Objects.hash(date, ticker);
    }
}
