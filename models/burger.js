var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(burger_name, cb) {
      orm.insertOne(burger_name, function(res) {
        cb(res);
      });
    },
    update: function(id, cb) {
      orm.update(id, function(res) {
        cb(res);
      });
    },
    // delete: function(burger_name, cb) {
    //     orm.selectAll("burgers", objColVals, condition, function(res) {
    //       cb(res);
    //     });
    //   },

  };



  // var pizza = {
  //   all: function(cb) {
  //     orm.all("pizzas", function(res) {
  //         cb(res);
  //     });
  //   },
  //   insertOne: function(pizza_name, cb){
  //     orm.insertOne(pizza_name, function(res){
  //         cb(res);
  //     });
  //   },
  //   // The variables cols and vals are arrays.
  //  // create: function(cols, vals, cb) {
  //   //  orm.create("pizzas", cols, vals, function(res) {
  //   //    cb(res);
  //   //  });
  //  // },
  //   update: function(pizza_id, cb) {
  //     orm.update(pizza_id, function(res) {
  //         cb(res);
  //     });
  //   },
  //  // delete: function(condition, cb) {
  //  //   orm.delete("pizzas", condition, function(res) {
  //  //     cb(res);
  //  //   });
  //  // }
  // };


  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;
  