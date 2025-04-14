use moviesDB
db.createUser({
  user: "reader",
  pwd: "readerpass",
  roles: [{ role: "read", db: "moviesDB" }]
})

use admin
db.createUser({
  user: "writer",
  pwd: "writerpass",
  roles: [{ role: "readWrite", db: "moviesDB" }]
})
