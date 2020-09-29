const router = require("express").Router();
const { response } = require("express");
const db = require("../../models");

router.get("/books", (req, res) => {
  db.Book.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err);
      }
    });
});

router.post("/savebook", (req, res) => {
  console.log(req.body);
  db.Book.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err);
      }
    });
});

router.delete("/removebook/:id", (req, res) => {
  console.log(req.params.id);
  db.Book.findById({ _id: req.params.id })
    .then((result) => {
      result.remove();
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err);
      }
    });
});

module.exports = router;
