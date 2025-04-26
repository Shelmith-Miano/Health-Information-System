const express = require('express');
const programs = require('../data/db').programs;

router.get('/', (req, res) => {
  res.json(programs);
})

router.post('/', (req, res) => {
  const newProgram = req.body;
  programs.push(newProgram);
  res.status(201).json(newProgram);
})

module.exports = router;

////
// programs.js
const express = require('express');
const router = express.Router(); // You forgot to define 'router'

const programs = require('../data/db').programs;

// Get all programs
router.get('/', (req, res) => {
  res.json(programs);
});

// Create a new program
router.post('/', (req, res) => {
  const newProgram = req.body;
  programs.push(newProgram);
  res.status(201).json(newProgram);
});

module.exports = router; // 'Router' was wrong, should be 'router'
