const db = connect("mongodb://admin:Go.9aheHd@3.82.253.117:27017/?authSource=admin&readPreference=primary&ssl=false");
const movieDB = db.getSiblingDB("movieDB");

const nolan = {
  _id: ObjectId(),
  name: "Christopher Nolan",
  birthdate: ISODate("1970-07-30T00:00:00Z"),
  nationality: "British-American"
};

const tarantino = {
  _id: ObjectId(),
  name: "Quentin Tarantino",
  birthdate: ISODate("1963-03-27T00:00:00Z"),
  nationality: "American"
};

movieDB.directors.insertMany([nolan, tarantino]);

const movie1 = {
  _id: ObjectId(),
  title: "Inception",
  year: 2010,
  director: nolan._id,
  genres: ["Sci-Fi", "Thriller"],
  actors: [
    { name: "Leonardo DiCaprio", role: "Cobb", birthdate: ISODate("1974-11-11T00:00:00Z") },
    { name: "Joseph Gordon-Levitt", role: "Arthur", birthdate: ISODate("1981-02-17T00:00:00Z") }
  ]
};

const movie2 = {
  _id: ObjectId(),
  title: "Pulp Fiction",
  year: 1994,
  director: tarantino._id,
  genres: ["Crime", "Drama"],
  actors: [
    { name: "John Travolta", role: "Vincent", birthdate: ISODate("1954-02-18T00:00:00Z") },
    { name: "Samuel L. Jackson", role: "Jules", birthdate: ISODate("1948-12-21T00:00:00Z") }
  ]
};

movieDB.movies.insertMany([movie1, movie2]);
