package com.webDataProject.webData;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.io.Serializable;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "prices")
@IdClass(StockId.class)
public class User implements Serializable{
  @Id
  @Column(name = "day")
  private String date;
  @Id
  @Column(name = "ticker")
  private String ticker;
  @Column(name = "open")
  private float open;
  @Column(name = "high")
  private float high;
  @Column(name = "low")
  private float low;
  @Column(name = "close")
  private float close;
  @Column(name = "adj_close")
  private float adj_close;
  @Column(name = "volume")
  private float volume;
  
  public String getDate() {
    return date;
  }
  public void setDate(String d) {
	    this.date = d;
  }
  public String getTicker() {
	    return ticker;
  }
  public void setTicker(String t) {
	    this.ticker = t;
  }
  public float getOpen() {
	    return open;
  }
  public void setOpen(float o) {
	    this.open = o;
  }
  public float getHigh() {
	    return high;
  }
  public void setHigh(float h) {
	    this.high = h;
  }
 
  public float getLow() {
	    return low;
  }
  public void setLow(float l) {
	    this.low = l;
  }
  public float getClose() {
	    return close;
  }
  public void setClose(float c) {
	    this.close = c;
  }
  public float getAdjClose() {
	    return adj_close;
  }
  public void setAdjClose(float ac) {
	    this.adj_close = ac;
  }
  public float getVolume() {
	    return volume;
  }
  public void setVolume(float v) {
	    this.volume = v;
  }
  @Override
  public String toString() {
    return "Value{" +
        "date=" + date +
        ", ticker='" + ticker + '\'' +
        ", open='" + open + '\'' +
        ", high='" + high + '\'' +
        ", low='" + low + '\'' +
        ", close='" + close + '\'' +
        ", adj_close='" + adj_close + '\'' +
        ", volume='" + volume + '\'' +
        '}';
  }
}