package fileops

import (
	"errors"
	"fmt"
	"os"
	"strconv"
)

func GetFloatFromFile(fileName string) (float64, error) {
	data, err := os.ReadFile(fileName)

	if err != nil {
		return 1000, errors.New("Failed to find file.")
	}

	var text string = string(data)
	value, err := strconv.ParseFloat(text, 64)

	if err != nil {
		return 1000, errors.New("Failed to parse stored value.")
	}

	return value, nil
}

func WriteBalanceToFile(balance float64, fileName string) {
	var balanceText string = fmt.Sprint(balance)
	os.WriteFile(fileName, []byte(balanceText), 0644)
}
