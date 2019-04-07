const express=require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
var db
app.use(cors())
app.use(bodyParser.json())
MongoClient.connect('mongodb://localhost:27017/', {
            useNewUrlParser: true
        }, (err, client) => {
    if (err) throw err
    db = client.db('legyen')
}) 

app.get('/',
    (req, res) => {
        db.collection('scoreboard').find().toArray( (err, score) => {
            res.send(score)
        })
    }
)

app.post('/',
    (req, res) => {
        console.log(req.body)
        db.collection('scoreboard').insertOne(req.body, score => {
            res.send( score )
        })
    }
)

app.listen(8082)