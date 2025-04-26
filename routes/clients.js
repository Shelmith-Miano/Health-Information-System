const express = require('express');
const router = express.Router(); // You forgot to define 'router'
const clients = require('../data/db').clients;
const programs = require('../data/db').programs;
const { v4: uuidv4 } = require('uuid'); // Import the uuid library for generating unique IDs
const { body, validationResult } = require('express-validator'); // Import express-validator for validation


const clients = [
  {
    id: 1,
    name: 'Client A',
    email: 'example@gmail.com',
    phone: '123-456-7890',
    programs: []
  },
  {
    id: 2,
    name: 'Client B',
    email: '