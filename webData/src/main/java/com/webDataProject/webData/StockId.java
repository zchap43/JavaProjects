package com.webDataProject.webData;

import java.io.Serializable;
import java.util.Objects;

public class StockId implements Serializable {

	private String date;
	private String ticker;
	
    public StockId() {
    }

    public StockId(String date, String ticker) {
        this.date = date;
        this.ticker = ticker;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StockId stockId = (StockId) o;
        return date.equals(stockId.date) &&
                ticker.equals(stockId.ticker);
    }

    @Override
    public int hashCode() {
        return Objects.hash(date, ticker);
    }
}