package app

import (
	"github.com/gin-gonic/gin"
	"log"
	"gopkg.in/mgo.v2/bson"
	"gopkg.in/mgo.v2"
	"fmt"
	"strconv"
)

var (
	__collection *mgo.Collection
)

type Comments struct {
	Name       string
	Comment    string
	User_id    int
	Image_url  []string
	Created_at string
	Updated_at string
}

func Index(c *gin.Context) {
	comments := make([]Comments, 0)
	__collection = GetCollection("my_bbs", "comments")
	err := __collection.Find(bson.M{}).All(&comments)
	if err != nil {
		log.Fatal(err)
	}

	c.JSON(200, gin.H{
		"result": comments,
	})
}

func Store(c *gin.Context) {
	params := c.Params
	fmt.Printf("Store test ID : " + params.ByName("id") + "\n")
	c.JSON(200, gin.H{
		"result": "success",
	})
}

func Update(c *gin.Context) {
	params := c.Params
	fmt.Print(params)

	fmt.Printf("Update test ID : " + params.ByName("id") + "\n")
	c.JSON(200, gin.H{
		"result": "success",
	})
}

func Delete(c *gin.Context) {
	params := c.Params
	id, err := strconv.Atoi(params.ByName("id"))
	__collection = GetCollection("my_bbs", "comments")
	if err != nil {
		c.JSON(404, gin.H{})
	}
	__collection.Remove(bson.M{"user_id": id})
	c.JSON(200, gin.H{
		"result": "success",
	})
}
