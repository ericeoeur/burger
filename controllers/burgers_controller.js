let express = require("express");

let router = express.Router();

// Import the model (burger.js) to use its database functions.

let burger = require("../models/burger.js");



router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all burgers to DOM)
router.get('/index', function (req, res) {
  burger.all(function(data) {
    var hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});


// Create a New Burger
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
  
    res.redirect('/index');

  });
});


// Eat a burger
router.post('/burger/eat/:id', function (req, res) {
  burger.update(req.params.id, function() {
    res.redirect('/index');
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



module.exports = router;

