const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.static(__dirname + '/build'));

mongoose.connect('mongodb://localhost:27017/plantae');

// Collection Schemas

  const plantSchema = new mongoose.Schema (
    {
      _id: Number,
      img: Number,
      type: String,
      title: String,
      price: Number,
      content: String,
      rating: Number,
    });

  const Plant = new mongoose.model('Plant', plantSchema);

  let data1 = ([
    {
      _id: 1,
      img: 1,
      type: "Desktop_Plants",
      title: "Monstera",
      price: 1900,
      content:
        "Having plants in the office has been shown to improve air",
        rating: 3.5
    },
    {
      _id: 2,
      img:3,
      type: "Balcony_Plants",
      title: "Lorem",
      price: 1500,
      content:
        "Having plants in the balcony has been shown to improve air",
        rating: 4.2
    },
    {
      _id: 3,
      img:4,
      type: "Corporate_Plants",
      title: "Tera",
      price: 1999,
      content:
        "Having plants at front of office has been shown to improve air",
        rating: 1.5
    },
    {
      _id: 4,
      img: 7,
      type: "Fancy_Plants",
      title: "Bonsai",
      price: 2900,
      content:
        "Having fancy plants  has been shown to improve air quality",
        rating: 3.2
    }
  ]);

  data1.forEach(entry => {
    let plantEle = new Plant(entry);
    Plant.findOne({_id: 5}, function (err, result) {
      if (!err) {
        if(result !== null) {
          plantEle.save();
        }
      }
    })
  })

// Collection Schemas End



app.route('/api/:key')
  .get(function (req, res) {
        Plant.find({},function (err, foundPlants) {
            if (!err) {
              if (req.params.key === '1234') {
                console.log(req.params.key);
                res.send(foundPlants);
              }
            } else {
              console.log(err);
            }
          });
  });


app.listen(process.env.PORT || 5000, function (req, res) {
  console.log('Server Up and running');
});
