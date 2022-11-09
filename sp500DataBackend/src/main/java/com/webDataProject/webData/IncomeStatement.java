package com.webDataProject.webData;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@IdClass(IncomeStatementId.class)
@Table(name = "incomeStatements")
public class IncomeStatement implements Serializable{
  
  // ticker
  @Id
  @Column(name = "ticker")
  public String ticker;
  // day
  @Id
  @Column(name = "day")
  public String date;
  
  //researchDevelopment
  @Column(name = "researchDevelopment")
  public float researchDevelopment;
  // effectOfAccountingCharges
  @Column(name = "effectOfAccountingCharges")
  public float effectOfAccountingCharges;
  // incomeBeforeTax
  @Column(name = "incomeBeforeTax")
  public float incomeBeforeTax;
  // minorityInterest
  @Column(name = "minorityInterest")
  public float minorityInterest;
  // netIncome
  @Column(name = "netIncome")
  public float netIncome;
  // sellingGeneralAdministrative
  @Column(name = "sellingGeneralAdministrative")
  public float sellingGeneralAdministrative;
  // grossProfit
  @Column(name = "grossProfit")
  public float grossProfit;
  // ebit
  @Column(name = "ebit")
  public float ebit;
  // operatingIncome
  @Column(name = "operatingIncome")
  public float operatingIncome;
  // otherOperatingExpenses
  @Column(name = "otherOperatingExpenses")
  public float otherOperatingExpenses;
  // interestExpense
  @Column(name = "interestExpense")
  public float interestExpense;
  // extraordinaryIncome
  @Column(name = "extraordinaryItems")
  public float extraordinaryItems;
  // nonRecurring
  @Column(name = "nonRecurring")
  public float nonRecurring;
  // otherItems
  @Column(name = "otherItems")
  public float otherItems;
  // incomeTaxExpense
  @Column(name = "incomeTaxExpense")
  public float incomeTaxExpense;
  // totalRevenue
  @Column(name = "totalRevenue")
  public float totalRevenue;
  // totalOperatingExpenses
  @Column(name = "totalOperatingExpenses")
  public float totalOperatingExpenses;
  // costOfRevenue
  @Column(name = "costOfRevenue")
  public float costOfRevenue;
  // totalOtherIncomeExpenseNet
  @Column(name = "totalOtherIncomeExpenseNet")
  public float totalOtherIncomeExpenseNet;
  // discontinuedOperations
  @Column(name = "discontinuedOperations")
  public float discontinuedOperations;
  // netIncomeFromContinuingOps
  @Column(name = "netIncomeFromContinuingOps")
  public float netIncomeFromContinuingOps;
  // netIncomeApplicableToCommonShares
  @Column(name = "netIncomeApplicableToCommonShares")
  public float netIncomeApplicableToCommonShares;
  
  public String getTicker() {return ticker;}
  public String getDate() {return date;}
  public float getResearchDevelopment() {return researchDevelopment;}
  public float getEffectoOfAccountingCharges() {return effectOfAccountingCharges;}
  public float getincomeBeforeTax() {return incomeBeforeTax;}
  public float getMinorityInterest() {return minorityInterest;}
  public float getNetIncome() {return netIncome;}
  public float getSellingGeneralAdministrative() {return sellingGeneralAdministrative;}
  public float getgrossProfit() {return grossProfit; }
  public float getEbit() {return ebit;}
  public float getOperatingIncome() {return operatingIncome;}
  public float getOtherOperatingExpenses() {return otherOperatingExpenses;}
  public float getInterestExpense() {return otherOperatingExpenses;}
  public float getExtraordinaryItems() {return extraordinaryItems;}
  public float getNonRecurring() {return nonRecurring;}
  public float getotherItems() {return otherItems;}
  public float getIncomeTaxExpense() {return incomeTaxExpense;}
  public float getTotalRevenue() {return totalRevenue;}
  public float getTotalOperatingExpenses() {return totalOperatingExpenses;}
  public float getCostOfRevenue() {return costOfRevenue;}
  public float getTotalOtherIncomeExpenseNet() { return totalOtherIncomeExpenseNet;}
  public float getDiscontinuedOperations() {return discontinuedOperations;}
  public float getNetIncomeFromContinuingOps() {return netIncomeFromContinuingOps;}
  public float getNetIncomeApplicableToCommonShares() {return netIncomeApplicableToCommonShares;}
  
  public void setTicker(String s) {
      this.ticker = s;
  }
  public void setDate(String s) {
      this.date = s;
  }
  public void setResearchDevelopment(float a) {this.researchDevelopment = a;}
  public void setEffectoOfAccountingCharges(float a) {this.effectOfAccountingCharges = a;}
  public void setincomeBeforeTax(float a) {this.incomeBeforeTax = a;}
  public void setMinorityInterest(float a) {this.minorityInterest = a;}
  public void setNetIncome(float a) {this.netIncome = a;}
  public void setSellingGeneralAdministrative(float a) {this.sellingGeneralAdministrative = a;}
  public void setgrossProfit(float a) {this.grossProfit = a; }
  public void setEbit(float a) {this.ebit = a;}
  public void setOperatingIncome(float a) {this.operatingIncome = a;}
  public void setOtherOperatingExpenses(float a) {this.otherOperatingExpenses = a;}
  public void setInterestExpense(float a) {this.otherOperatingExpenses = a;}
  public void setExtraordinaryItems(float a) {this.extraordinaryItems = a;}
  public void setNonRecurring(float a) {this.nonRecurring = a;}
  public void setotherItems(float a) {this.otherItems = a;}
  public void setIncomeTaxExpense(float a) {this.incomeTaxExpense = a;}
  public void setTotalRevenue(float a) {this.totalRevenue = a;}
  public void setTotalOperatingExpenses(float a) {this.totalOperatingExpenses = a;}
  public void setCostOfRevenue(float a) {this.costOfRevenue = a;}
  public void setTotalOtherIncomeExpenseNet(float a) {this.totalOtherIncomeExpenseNet = a;}
  public void setDiscontinuedOperations(float a) {this.discontinuedOperations = a;}
  public void setNetIncomeFromContinuingOps(float a) {this.netIncomeFromContinuingOps = a;}
  public void setNetIncomeApplicableToCommonShares(float a) {this.netIncomeApplicableToCommonShares = a;}
}
  