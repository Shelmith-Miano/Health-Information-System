const express = require('express');
const programs = require('../data/db').programs;

app.get('/', (req, res) => {
  res.json(programs);
})

app.post('/', (req, res) => {
  const newProgram = req.body;
  programs.push(newProgram);
  res.status(201).json(newProgram);
})

module.exports = Router;