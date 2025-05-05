# Backup Variante 1

![image](./img/createSnapshot.png)
![image](./img/1_directorDropped.png)
![image](./img/createvVolume.png)
![image](./img/attachVolume.png)
![image](./img/successAttach.png)

# Backup Variante 2

![image](./img/2_createBackup.png)
![image](./img/2_dropDB.png)
![image](./img/2_DBgone.png)
![image](./img/restoreDB.png)
![image](./img/2_DBback.png)

## comands
- mongodump --uri="mongodb://admin:dasPassw0rt%21@3.215.11.28:27017/moviesDB?authSource=admin" --out=C:\Backup\moviesDB
- mongorestore --uri="mongodb://admin:dasPassw0rt%21@3.215.11.28:27017/moviesDB?authSource=admin" C:\Backup\moviesDB\moviesDB
