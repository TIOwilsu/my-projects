package main

import (
	"errors"
	"fmt"
	"os"
)

func main() {
	var revenue float64 = getInput("Revenue: ")
	var expenses float64 = getInput("Expenses: ")
	var taxRate float64 = getInput("TaxRate: ")

	var ebt, profit, ratio = calculateFinancials(revenue, expenses, taxRate)

	formattedValues(ebt, profit, ratio)
}

func getInput(label string) float64 {
	var value float64
	fmt.Print(label)
	fmt.Scan(&value)

	if value <= 0 {
		var inputError = errors.New("ERROR => CAN'T POSSIBLE TO PUT ZERO OR NEGATIVE NUMBERS")
		panic(inputError)
	}

	return value
}

func calculateFinancials(revenue float64, expenses float64, taxRate float64) (float64, float64, float64) {
	var ebt = revenue - expenses
	var profit = ebt * (1 - taxRate/100)
	var ratio = ebt / profit

	return ebt, profit, ratio
}

func formattedValues(ebt float64, profit float64, ratio float64) {
	var formattedEBT = fmt.Sprintf("EBT: %.1f\n", ebt)
	var formattedProfit = fmt.Sprintf("Profit: %.1f\n", profit)
	var formattedRatio = fmt.Sprintf("Ratio: %.3f", ratio)

	fmt.Print(formattedEBT, formattedProfit, formattedRatio)
	writeValueToFile(formattedEBT, formattedProfit, formattedRatio)
}

func writeValueToFile(ebt string, profit string, ratio string) {
	var value = fmt.Sprintf("%s%s%s", ebt, profit, ratio)
	os.WriteFile("results.txt", []byte(value), 0644)
}
