const db = connect("mongodb://admin:Go.9aheHd@3.82.253.117:27017/?authSource=admin&readPreference=primary&ssl=false");
const movies = db.getSiblingDB("movieDB").movies;

movies.updateOne(
  { _id: ObjectId("67f37b746f865306316b140d") },
  { $set: { title: "Inception: Remastered" } }
);

movies.updateMany(
  { $or: [ { genres: "Drama" }, { year: { $lt: 2010 } } ] },
  { $set: { awardWinning: true } }
);

movies.replaceOne(
  { _id: ObjectId("67f37b746f865306316b140e") },
  {
    _id: ObjectId("67f37b746f865306316b140e"),
    title: "Reservoir Dogs",
    year: 1992,
    director: ObjectId("67f37b746f865306316b140c"),
    genres: ["Crime", "Thriller"],
    actors: [
      { name: "Harvey Keitel", role: "Mr. White", birthdate: ISODate("1939-05-13T00:00:00Z") },
      { name: "Tim Roth", role: "Mr. Orange", birthdate: ISODate("1961-05-14T00:00:00Z") }
    ]
  }
);
