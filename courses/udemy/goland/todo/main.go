package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"

	"example.com/todo/note"
	"example.com/todo/todo"
)

type saver interface {
	Save() error
}

type outputtable interface {
	saver
	Display()
}

func main() {
	printSomething(1)
	printSomething(1.5)
	printSomething("Hello")

	userNote, err := getNoteData()
	todoText := getUserData("Todo text: ")

	todo, err := todo.New(todoText)

	if err != nil {
		fmt.Println(err)
	}

	printSomething(todo)

	err = outputData(todo)

	if err != nil {
		return
	}

	outputData(userNote)
}

func printSomething(value interface{}) {
	intValue, ok := value.(int)

	if ok {
		fmt.Println("Integer: ", intValue)
	}

	floatValue, ok := value.(float64)

	if ok {
		fmt.Println("Float: ", floatValue)
	}

	stringValue, ok := value.(string)

	if ok {
		fmt.Println("String: ", stringValue)
	}

	// switch value.(type) {
	// case int:
	// 	fmt.Println("Integer: ", value)
	// case float64:
	// 	fmt.Println("Float: ", value)
	// case string:
	// 	fmt.Println("String: ", value)
	// }
}

func outputData(data outputtable) error {
	data.Display()
	return saveData(data)
}

func saveData(data saver) error {
	err := data.Save()

	if err != nil {
		fmt.Println("Saving the todo failed.")
		return err
	}

	fmt.Println("Saving the todo succeeded!")
	return nil
}

func getNoteData() (note.Note, error) {
	title := getUserData("Note title: ")
	content := getUserData("Note content: ")

	note, err := note.New(title, content)

	if err != nil {
		fmt.Print(err)
		return note, err
	}

	return note, nil
}

func getUserData(promptText string) string {
	fmt.Printf("%v ", promptText)

	reader := bufio.NewReader(os.Stdin)
	text, err := reader.ReadString('\n')

	if err != nil {
		return ""
	}

	text = strings.TrimSuffix(text, "\n")
	text = strings.TrimSuffix(text, "\r")

	return text
}
