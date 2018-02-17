var orm = require("../config/orm.js");


var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (burger_name, cb) {
    orm.insertOne(burger_name, function (res) {
      cb(res);
    });
  },
  update: function (id, cb) {
    orm.update(id, function (res) {
      cb(res);
    });
  },
  // delete: function(burger_name, cb) {
  //     orm.selectAll("burgers", objColVals, condition, function(res) {
  //       cb(res);
  //     });
  //   },

};






// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;