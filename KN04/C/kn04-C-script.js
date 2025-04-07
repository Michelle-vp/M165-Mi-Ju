db.movie.aggregate([
  {
    $project: {
      title: 1,
      "actors.name": 1,
      "actors.role": 1,
      _id: 0
    }
  }
])

db.movie.aggregate([
  {
    $match: {
      "actors.name": "Tom Hardy"
    }
  },
  {
    $project: {
      title: 1,
      actors: 1
    }
  }
])

db.movie.aggregate([
  { $unwind: "$actors" },
  {
    $project: {
      title: 1,
      "actors.name": 1,
      "actors.role": 1
    }
  }
])

