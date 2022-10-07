package com.webDataProject.webData;

import java.io.Serializable;
import java.util.Objects;

public class PriceId implements Serializable {

	private String date;
	private String ticker;
	
    public PriceId() {
    }

    public PriceId(String date, String ticker) {
        this.date = date;
        this.ticker = ticker;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PriceId priceId = (PriceId) o;
        return date.equals(priceId.date) &&
                ticker.equals(priceId.ticker);
    }

    @Override
    public int hashCode() {
        return Objects.hash(date, ticker);
    }
}
