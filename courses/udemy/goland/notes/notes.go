package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"

	"example.com/notes/note"
)

func main() {
	userNote, err := getNoteData()

	if err != nil {
		fmt.Println(err)
	}

	userNote.Display()
	err = userNote.Save()

	if err != nil {
		fmt.Println("Saving the note failed.")
		return
	}

	fmt.Println("Saving the note succeeded!")
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
