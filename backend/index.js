const express = require('express'); // Import the express module
const programsRouter = require('./routes/programs'); // Import the programs router
const clientsRouter = require('./routes/clients'); // Import the clients router
const cors = require('cors'); // Import the cors module for Cross-Origin Resource Sharing
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/programs', programsRouter);
app.use('/clients', clientsRouter);

