const express = require('express'); // Import the express module
const programsRouter = require('./routes/programs'); // Import the programs router
const clientsRouter = require('./routes/clients'); // Import the clients router
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/programs', programsRouter);
app.use('/clients', clientsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})