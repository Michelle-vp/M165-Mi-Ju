const db = connect("mongodb://admin:Go.9aheHd@3.82.253.117:27017/?authSource=admin&readPreference=primary&ssl=false");
const movies = db.getSiblingDB("movieDB").movies;

print("All movies:");
printjson(movies.find({}).toArray());

print("Movies after year 2000:");
printjson(movies.find({ year: { $gt: 2000 } }).toArray());

print("Movies with actors born after 1980:");
printjson(movies.find({
  actors: { $elemMatch: { birthdate: { $gt: ISODate("1980-01-01T00:00:00Z") } } }
}).toArray());

print("Movies in genre 'Drama':");
printjson(movies.find({ genres: "Drama" }).toArray());

print("Projection (titles only):");
printjson(movies.find({}, { _id: 0, title: 1 }).toArray());
