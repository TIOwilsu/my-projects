package main

import (
	"fmt"

	"example.com/array/product"
)

func main() {
	executeHobbies()
	executeGoals()
	executeProducts()
}

func executeHobbies() {
	// 1)
	fmt.Println("1)")
	var hobbies = [3]string{"jogging", "play guitar", "programming"}
	fmt.Println("Hobbies: ", hobbies)
	fmt.Println("------------------------------")

	// 2)
	fmt.Println("2)")
	fmt.Println("First hobby: ", hobbies[0])
	fmt.Println("Second and Third hobby:", hobbies[1:3])
	fmt.Println("------------------------------")

	// 3)
	fmt.Println("3)")
	mainHobbies := hobbies[:2]
	fmt.Println("First and second hobby: ", mainHobbies)
	fmt.Println("------------------------------")

	// 4)
	fmt.Println("4)")
	fmt.Println(cap(mainHobbies))
	mainHobbies = mainHobbies[1:3]
	fmt.Println(mainHobbies)
}

func executeGoals() {
	// 5)
	fmt.Println("5)")
	var goals = []string{"Golang course", "Javascript course"}
	goals[1] = "Typescript course"
	fmt.Println("------------------------------")

	// 6)
	fmt.Println("6)")
	goals = append(goals, "SCSS course")
	fmt.Println(goals)
	fmt.Println("------------------------------")
}

func executeProducts() {
	// 7
	fmt.Println("7)")
	var products = []product.Product{product.New("Nike shoes", 600), product.New("Adidas shoes", 300)}
	fmt.Println(products)

	products = append(products, product.New("Asics shoes", 1000))

	fmt.Println(products)
}
