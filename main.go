package main

import (
	"fmt"
	"net/http"
	"log"
	"html/template"
)

func handler(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("./index.html"))
	if err := t.ExecuteTemplate(w, "index.html", nil); err != nil {
		log.Fatal(err)
	}
}

func testHandler(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("./templates/hoge.html"))
	if err := t.ExecuteTemplate(w, "hoge.html", nil); err != nil {
		log.Fatal(err)
	}}

func main() {
	http.HandleFunc("/", handler) // Render web page.
	http.HandleFunc("/hoge", testHandler) // Render web page.
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}else {
		fmt.Printf("Listen: http://localhost:8080/")
	}
}