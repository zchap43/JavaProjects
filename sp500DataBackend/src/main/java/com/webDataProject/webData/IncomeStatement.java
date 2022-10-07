package com.webDataProject.webData;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.io.Serializable;
import java.lang.Float;
@Entity // This tells Hibernate to make a table out of this class
@Table(name = "incomeStatement")
@IdClass(IncomeStatementId.class)
public class IncomeStatement implements Serializable{
  @Id
  @Column(name = "day")
  private String date;
  @Id
  @Column(name = "ticker")
  private String ticker;
  @Column(name = "researchDevelopment")
  private float researchDevelopment;
  @Column(name = "effectOfAccountingCharges")
  private float effectOfAccountingCharges;
  @Column(name = "incomeBeforeTax")
  private float incomeBeforeTax;
  @Column(name = "minorityInterest")
  private float minorityInterest;
  @Column(name = "netIncome")
  private float netIncome;
  @Column(name = "sellingGeneralAdministrative")
  private float sellingGeneralAdministrative;
  @Column(name = "grossProfit")
  private float grossProfit;
  @Column(name = "ebit")
  private float ebit;
  @Column(name = "operatingIncome")
  private float operatingIncome;
  @Column(name = "otherOperatingExpenses")
  private float otherOperatingExpenses;
  @Column(name = "interestExpense")
  private float interestExpense;
  @Column(name = "extraordinaryItems")
  private float extraordinaryItems;
  @Column(name = "nonRecurring")
  private float nonRecurring;
  @Column(name = "otherItems")
  private float otherItems;
  @Column(name = "incomeTaxExpense")
  private float incomeTaxExpense;
  @Column(name = "totalRevenue")
  private float totalRevenue;
  @Column(name = "totalOperatingExpenses")
  private float totalOperatingExpenses;
  @Column(name = "costOfRevenue")
  private float costOfRevenue;
  @Column(name = "totalOtherIncomeExpenseNet")
  private float totalOtherIncomeExpenseNet;
  @Column(name = "discontinuedOperations")
  private float discontinuedOperations;
  @Column(name = "netIncomeFromContinuingOps")
  private float netIncomeFromContinuingOps;
  @Column(name = "netIncomeApplicableToCommonShares")
  private float netIncomeApplicableToCommonShares;
  // researchDevelopment,effectOfAccountingCharges,incomeBeforeTax,minorityInterest,netIncome, "
          // "sellingGeneralAdministrative,grossProfit,ebit, operatingIncome, otherOperatingExpenses, interestExpense, extraordinaryItems, nonRecurring, otherItems,"
          // "incomeTaxExpense, totalRevenue, totalOperatingExpenses, costOfRevenue, totalOtherIncomeExpenseNet, discontinuedOperations, netIncomeFromContinuingOps,"
          // "netIncomeApplicableToCommonShares
}