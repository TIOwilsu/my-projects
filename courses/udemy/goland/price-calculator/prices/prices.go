package prices

import (
	"fmt"

	"example.com/price-calculator/conversion"
	"example.com/price-calculator/iomanager"
)

type TaxIncludedPriceJob struct {
	IOManger          iomanager.IOManager `json:"-"`
	TaxRate           float64             `json:"tax_rate"`
	InputPrices       []float64           `json:"input_Prices"`
	TaxIncludedPrices map[string]string   `json:"tax_included_prices"`
}

func (job *TaxIncludedPriceJob) LoadData() error {

	lines, err := job.IOManger.ReadLines()

	if err != nil {
		return err
	}

	prices, err := conversion.StringsToFloat(lines)

	if err != nil {
		return err
	}

	job.InputPrices = prices
	return nil
}

func (job TaxIncludedPriceJob) Process(doneChan chan bool, errorChan chan error) {
	err := job.LoadData()

	if err != nil {
		errorChan <- err
		return
	}

	result := make(map[string]string)

	for _, price := range job.InputPrices {
		taxIncludedPriceJob := price * (1 + job.TaxRate)
		result[fmt.Sprintf("%.2f", price)] = fmt.Sprintf("%.2f", taxIncludedPriceJob)
	}

	job.TaxIncludedPrices = result
	job.IOManger.WriteJson(job)

	doneChan <- true
	//return nil
}

func NewTaxIncludedPriceJob(iom iomanager.IOManager, taxRate float64) *TaxIncludedPriceJob {
	return &TaxIncludedPriceJob{
		IOManger:    iom,
		InputPrices: []float64{10, 64, 30},
		TaxRate:     taxRate,
	}
}
