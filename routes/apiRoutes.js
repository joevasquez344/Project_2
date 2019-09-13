var db = require("../models");
var passport = require("../config/passport.js");


// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api/questionCards", function(req, res) { 
    console.log("in server")
    db.question_cards.findAll({where: {played: false}})
    .then(function(dbquestionCards) {
      res.json(dbquestionCards);
    });
  });

  app.get("/api/responseCards", function(req, res) {
    console.log("in server")
   
    db.response_cards.findAll({where: {played: false}})
    .then(function(dbresponseCards) {
      res.json(dbresponseCards);
    });
  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/game");
  });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      screenName: req.body.screenName,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });


  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");

  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });




  // app.get("/api/players", function (req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.players.findAll({}).then(function (dbplayers) {
  //     // We have access to the todos as an argument inside of the callback function
  //     res.json(dbplayers);
  //   });
  // });


  // POST route for saving a new post
  // app.add("/api/players", function (req, res) {
  //   db.players.create({
  //     name: req.body.text
  //   }).then(function (dbplayers) {
  //     res.json(dbplayers);
  //   })
  //     .catch(function (err) {
  //       res.json(err);
  //     })
  // });

  // app.get("/api/players", function(req, res) {
  //   db.players.findAll({})
  //   .then(function(dbplayers) {
  //     res.json(dbplayers);
  //   });
  // });

  // app.post("/api/players", function(req, res) {
  //   db.players.create({
  //     username: req.body.username,
  //     password: req.body.password,
  //     email: req.body.email
  //   })
  //   .then(function(dbplayers) {
  //     res.json(dbplayers);
  //   });
  // })
  

};

// module.exports = function (app) {
//   app.get("/api/login", function(req, res) {
//     db.players.create({
//       username: req.body.text,
//       password: req.body.complete
//     })
//     .then(function(dbplayers) {
//       res.json(dbplayers)
//     });
//   });
// };

