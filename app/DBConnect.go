package app

import (
	"gopkg.in/mgo.v2"
	"os"
	"fmt"
)

var (
	Session *mgo.Session // Session stores mongo session
	// Mongo *mgo.DialInfo // Mongo stores the mongodb connection string information
)

const MongoDBUrl string = "mongodb://127.0.0.1:27017"


func DBConnect() {
	var uri string = os.Getenv("MONGODB_URL")
	if len(uri) == 0 {
		uri = MongoDBUrl
	}

	session, err := mgo.Dial(uri)
	if err != nil {
		fmt.Printf("Can't connect to mongo, go error %v\n", err)
		panic(err.Error())
	}
	session.SetSafe(&mgo.Safe{})
	fmt.Println("Connected to", uri)
	Session = session

	// mongo, err := mgo.ParseURL(uri)
	// Mongo = mongo
}

func GetDB(dbName string) *mgo.Database {
	return Session.DB(dbName)
}

func GetCollection(dbName string, collection string) *mgo.Collection {
	return GetDB(dbName).C(collection)
}