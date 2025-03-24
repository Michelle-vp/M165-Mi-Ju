### Warum wurde das Datum nicht korrekt gespeichert?

MongoDB automatically saves a string like `"2004-03-24"` as a String, even if it looks like a date.
so that MongoDB can recognize it as a date, it has to look like this:

```
{
  "geburtsdatum": { "$date": "2004-03-24T00:00:00Z" }
}
```

Only this speciall format `($date)` tells MongoDB that its a date.

### Wieso ist dieser komplizierte Weg notwendig, um ein Datum zu definieren?

MongoDB is a dokumentbased Database and uses JSON.
In normal JSON there is no type for a date, thats why MongoDB needs this speciall $date-Format.
So Mongo automatically asumes its a String, unless specified otherwhise.


![1](./1.png)
![2](./2.png)

