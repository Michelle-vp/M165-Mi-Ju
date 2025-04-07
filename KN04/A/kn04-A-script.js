db.movie.aggregate([
  { $match: { year: { $gte: 2010 } } },
  { $match: { genres: "Action" } }
])

db.movie.aggregate([
  { $match: { year: { $gte: 2000 } } },
  { $project: { title: 1, year: 1, genres: 1, _id: 0 } },
  { $sort: { year: -1 } }
])

db.movie.aggregate([
  { $group: { _id: null, totalMovies: { $sum: 1 } } }
])

db.movie.aggregate([
  { $unwind: "$genres" },
  { $group: { _id: "$genres", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])
