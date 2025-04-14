### create users script: createUsers.js
``` 
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
```
---
## connecting with the wrong authSource:
![image](./img/wrongAuthSource.png)
### connecting with the right authSource:
![image](./img/readerconnectionstring.png)
---
## reader permission test
we can see that the user (reader) is able to see the movies, but isnt authoriesed to create one.
the blue connection is the one im currently using where im logged in with the reader, the red one is the failed one with the wrond authSource.
![image](./img/user1permissiontest.png)
---
## writer permission test
here im connected as the other user (writer) who is able to create objects too
![image](./img/user2permissiontest.png).
### writer connection
![image](./img/writerconnectionstring.png)
