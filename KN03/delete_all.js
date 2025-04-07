const db = connect("mongodb://admin:Go.9aheHd@3.82.253.117:27017/?authSource=admin&readPreference=primary&ssl=false");
const movieDB = db.getSiblingDB("movieDB");

movieDB.movies.drop();
movieDB.directors.drop();
