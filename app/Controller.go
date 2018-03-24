package app

import (
	"github.com/gin-gonic/gin"
	"log"
	"gopkg.in/mgo.v2/bson"
	"gopkg.in/mgo.v2"
)


var  (
	__collection *mgo.Collection
)

type Comments struct {
	Name string
	Comment string
	User_id int
	Image_url []string
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
