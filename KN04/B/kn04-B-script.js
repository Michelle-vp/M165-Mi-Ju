db.movie.aggregate([
  {
    $lookup: {
      from: "director",
      localField: "director",
      foreignField: "_id",
      as: "director_info"
    }
  },
  { $unwind: "$director_info" },
  {
    $project: {
      title: 1,
      year: 1,
      "director_info.name": 1,
      "director_info.nationality": 1
    }
  }
])

db.movie.aggregate([
  {
    $lookup: {
      from: "director",
      localField: "director",
      foreignField: "_id",
      as: "director_info"
    }
  },
  { $unwind: "$director_info" },
  { $match: { "director_info.nationality": "USA" } },
  {
    $project: {
      title: 1,
      year: 1,
      "director_info.name": 1,
      "director_info.nationality": 1
    }
  },
  { $sort: { year: -1 } }
])
