const router = require("express").Router();
const db = require("../../models");

router.post("/savebook", (req, res) => {
  console.log(req.body);
  db.Book.create(req.body)
    .then((result) => {
      // console.log(`Workout added successfully`);
      res.json(result);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err);
      }
    });
});
module.exports = router;
