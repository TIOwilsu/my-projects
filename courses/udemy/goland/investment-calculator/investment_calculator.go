package main

import (
	"fmt"
	"math"
)

func main() {
	var investmentAmount float64
	var expectedReturnRate float64 = 5.5
	var years float64

	fmt.Print("Investment Amount: ")
	fmt.Scan(&investmentAmount)

	fmt.Print("Expected Return Rate: ")
	fmt.Scan(&expectedReturnRate)

	fmt.Print("Years: ")
	fmt.Scan(&years)

	var futureValue, futureRealValue = calculateFutureValues(investmentAmount, expectedReturnRate, years)

	var formattedFutureValue string = fmt.Sprintf("Future Values: %.0f\n", futureValue)
	var formattedRealValue string = fmt.Sprintf("Future Real Value: %.0f", futureRealValue)

	fmt.Print(formattedFutureValue, formattedRealValue)
}

func calculateFutureValues(investmentAmount float64, expectedReturnRate float64, years float64) (float64, float64) {
	const inflationRate float64 = 2.5
	var futureValue = investmentAmount * math.Pow(1+expectedReturnRate/100, years)
	var futureRealValue = futureValue / math.Pow(1+inflationRate/100, years)

	return futureValue, futureRealValue
}
