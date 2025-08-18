package user

import (
	"errors"
	"fmt"
	"time"
)

type User struct {
	firstName string
	lastName  string
	birthDate string
	createdAt time.Time
}

func (user User) OutputUserDetails() {
	fmt.Println(user.firstName, user.lastName, user.birthDate)
}

func (user *User) ClearUserName() {
	user.firstName = ""
	user.lastName = ""
}

func New(firstName string, lastName string, birthDate string) (*User, error) {

	if firstName == "" || lastName == "" || birthDate == "" {
		return nil, errors.New("First name, Last name and birthdate are required")
	}

	return &User{
		firstName: firstName,
		lastName:  lastName,
		birthDate: birthDate,
		createdAt: time.Now(),
	}, nil
}

type Admin struct {
	email    string
	password string
	User
}

func NewAdmin(email string, password string) Admin {
	return Admin{
		email:    email,
		password: password,
		User: User{
			firstName: "ADMIN",
			lastName:  "ADMIN",
			birthDate: "---",
			createdAt: time.Now(),
		},
	}
}
