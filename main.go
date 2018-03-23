package main

import (
	"fmt"
	"net/http"
	"log"
	"github.com/gin-gonic/gin"
)

type C struct {
	Id int
	Name string
}

func Top(c *gin.Context) {
	c.HTML(http.StatusOK, "Top.tmpl", gin.H{
		"a": "a",
		"b": []string{"b_todo1","b_todo2"},
		"e": true,
		"f": false,
		"h": true,
	})
}

func Index(c *gin.Context) {
	c.HTML(http.StatusOK, "Index.tmpl", gin.H{
	})
}

func Show(c *gin.Context) {
	params := c.Params
	fmt.Printf("Show test ID : " + params.ByName("id"))
	c.HTML(http.StatusOK, "Show.tmpl", gin.H{
	})
}

func Create(c *gin.Context) {
	c.HTML(http.StatusOK, "Create.tmpl", gin.H{
	})
}

func Store(c *gin.Context) {
	params := c.Params
	fmt.Printf("POst test ID : " + params.ByName("id"))
	//c.HTML(http.StatusOK, "Edit.tmpl", gin.H{
	//})
}

func Edit(c *gin.Context) {
	params := c.Params
	fmt.Printf("Edit test ID : " + params.ByName("id"))
	c.HTML(http.StatusOK, "Edit.tmpl", gin.H{
	})
}

func Update(c *gin.Context) {
	params := c.Params
	fmt.Printf("Delete test ID : " + params.ByName("id"))
	c.HTML(http.StatusOK, "Edit.tmpl", gin.H{
	})
}

func Delete(c *gin.Context) {
	params := c.Params
	fmt.Printf("Delete test ID : " + params.ByName("id"))
	//c.HTML(http.StatusOK, "Edit.tmpl", gin.H{
	//})
}

func main() {
	/* Routing start */
	router := gin.Default()
	router.LoadHTMLGlob("templates/*.tmpl") // Enable templates.
	router.GET("/", Top)
	router.GET("/index", Index)
	router.GET("/create", Create)
	router.POST("/store", Store)
	router.GET("/show/:id", Show)
	router.GET("/edit/:id", Edit)
	router.PATCH("/update", Update)
	router.DELETE("/delete/:id", Delete)
	log.Fatal(router.Run(":8080")) // router.Run(":8080") for a hard coded port
}