package main

import (
	"fmt"
	"log"
	"github.com/gin-gonic/gin"
	"./app"
)


func preProcMiddleware () gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")

		/* Before process */

		c.Next()

		/* After process */
	}
}

func main() {
	app.DBConnect()
	/* Routing start */
	router := gin.Default()
	router.Use(preProcMiddleware())
	// router.LoadHTMLGlob("templates/*.tmpl") // Enable templates.
	router.GET("/index", app.Index)
	router.POST("/store", app.Store)
	router.POST("/update", app.Update)
	router.POST("/delete/:id", app.Delete)
	fmt.Printf("Run serve: http://localhost:8080\n")
	log.Fatal(router.Run(":8080")) // router.Run(":8080") for a hard coded port
}