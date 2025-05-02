const express = require('express');
const programs = require('../data/db').programs;
const router = express.Router();

router.get('/', (req, res) => {
  res.json(programs);
})

router.post('/', (req, res) => {
  const newProgram = req.body;
  programs.push(newProgram);
  res.status(201).json(newProgram);
})

module.exports = router;

