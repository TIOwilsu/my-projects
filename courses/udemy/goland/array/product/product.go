package product

import (
	"math/rand/v2"
)

type Product struct {
	id    int
	title string
	price float64
}

func New(title string, price float64) Product {
	return Product{
		id:    rand.IntN(100),
		title: title,
		price: price,
	}
}
