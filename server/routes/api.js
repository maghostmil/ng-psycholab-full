var express = require('express');
var router = express.Router();
var users = require('../../models/models');
var path = require('path');

router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/login', (req, res) => {
  let user = req.body.user;
  let pass = req.body.pass;

  users.findOne({ user: user, pass: pass }, function (err, user) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }

    if (!user) {
      return res.status(404).send();
    }
    if (user) {
      return res.send(user);
    }
  });

});

router.post('/register', (req, res) => {


  users.findOne({ user: req.body.user }, function (err, user) {
    if (user) {
      res.status(500).send();
    }
    else if (!user) {
      let newUser = new users();
      newUser.user = req.body.user;
      newUser.pass = req.body.pass;
      newUser.points = 0;
      newUser.played = 0;

      newUser.save(function (err, savedUser) {
        if (err) {
          console.log(err);
          return res.status(500).send();
        }

        return res.status(200).send();
      });
    };
  });
});

router.post('/saveGameData', (req, res) => {
  let user = req.body.user;
  users.findOne({ user: user }, function (err, user) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }

    if (!user) {
      return res.status(404).send();
    }
    if (user) {
      user.played = user.played + 1;
      user.points = user.points + req.body.points;

      user.save(function (err, savedUser) {
        if (err) {
          console.log(err);
          return res.status(500).send();
        }

        return res.status(200).send();
      });
    };
  });
});

router.get('/getAllUsersData', async function (req, res) {
  let profiles = await users.find({}, {
    "user": 1,
    "points": 1,
    "played": 1,
    "_id": 0
  }, { limit: 10, sort: { points: -1, played: 1 } });

  return res.send(profiles);
});

module.exports = router;
