const db = connect("mongodb://admin:Go.9aheHd@3.82.253.117:27017/?authSource=admin&readPreference=primary&ssl=false");
const movies = db.getSiblingDB("movieDB").movies;
const directors = db.getSiblingDB("movieDB").directors;

movies.deleteMany({
  $or: [
    { _id: ObjectId("67f3749195aecf61d06b140d") },
    { _id: ObjectId("67f3749195aecf61d06b140e") }
  ]
});

directors.deleteOne({ _id: ObjectId("67f3749195aecf61d06b140c") });