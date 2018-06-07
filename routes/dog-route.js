"use strict";
const express = require("express");
const dogRouter = express.Router();

const pg = require("pg");
const pool = require("../connection");

dogRouter.get("/dogs", (req, res) => {
  pool.query("SELECT * FROM dogs ORDER BY dog_id").then((result) => {
    res.send(result.rows);
  });
});

dogRouter.post("/dogs", (req, res) => {
  pool.query("INSERT INTO dogs(dog_name, dog_age, dog_breed, dog_colors) VALUES($1::text, $2::int, $3::text, $4::text)", [req.body.dog_name, req.body.dog_age, req.body.dog_breed, req.body.dog_colors])
  .then(() => {
    pool.query("SELECT * FROM dogs").then((result) => {
      res.send(result.rows);
    });
  });
});

dogRouter.delete("/dogs/:dog_id", (req, res) => {
  pool.query("DELETE FROM dogs WHERE dog_id=$1::int", [req.params.dog_id]).then(() => {
    pool.query("SELECT * FROM dogs ORDER BY dog_id").then((result) => {
      res.send(result.rows);
    });
  });
});

dogRouter.put("/dogs/:dog_id", (req, res) => {
  pool.query("UPDATE dogs SET dog_name=$1::text, dog_age=$2::int, dog_breed=$3::text, dog_colors=$4::text WHERE dog_id=$5::int", [req.body.dog_name, req.body.dog_age, req.body.dog_breed, req.body.dog_colors, req.params.dog_id]).then(() => {
    pool.query("SELECT * FROM dogs ORDER BY dog_id").then((result) => {
      res.send(result.rows);
    });
  });
});


module.exports = dogRouter;