var express = require('express');
var router = express.Router();
var User = require('../schemas/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = new User({
    username: "홍길동",
    userid: "hong3",
  });
  user.save()
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    next(err);
  })
});


module.exports = router;
