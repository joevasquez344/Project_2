// var db = require("../models");

// module.exports = function(app) {
//   app.get("api/players", function(req,res) {
//     db.
//   });

//   app.post("/api/player", function(req, res) {
//     db.Player.create(req.body).then(function(dbPlayer) {
//       res.json(dbPlayer);
//     });
//   });

// }



// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };



var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/api/players", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.players.findAll({}).then(function (dbplayers) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbplayers);
    });
  });


  // POST route for saving a new post
  app.add("/api/players", function (req, res) {
    db.players.create({
      name: req.body.text
    }).then(function (dbplayers) {
      res.json(dbplayers);
    })
      .catch(function (err) {
        res.json(err);
      })
  });

  // app.get("/api/main", function (req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.main.findAll({}).then(function (dbmain) {
  //     // We have access to the todos as an argument inside of the callback function
  //     res.json(dbmain);
  //   });
  // });
  app.get("/api/main", function(req, res) {
    db.main.findAll({})
    .then(function(dbmain) {
      res.json(dbmain);
    });
  });


};