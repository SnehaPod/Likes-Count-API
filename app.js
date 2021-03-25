const app = require("express")();
const mongoose = require("mongoose");
var totalLikeCountForAll = require("./api/controllers/controller").totalLikeCountForAll;
var totalLikeCountByUserId = require("./api/controllers/controller").totalLikeCountByUserId;

const port = 8082;

process.env.MONGO_URI = "mongodb//localhost:27017/test";


mongoose.connect(process.env.MONGO_URI, (err, connected) => {
  if(connected) {
    console.log("Connected to Mongo DB");
  } else {
    console.log(`err`, err)
  }
})

app.get('/api/total-like-count', totalLikeCountForAll);
app.get('/api/total-like-count/:uid', totalLikeCountByUserId);


app.listen(port, ()=> {
    console.log("App listening on ", port);
})