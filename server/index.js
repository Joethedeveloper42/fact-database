const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Fact = require('./models/fact');
const routes = require('./routes/facts');

const app = express();
const PORT = process.env.PORT || 4000;

//Connect to DB
mongoose.connect('mongodb://joethedeveloper42:password123@ds163119.mlab.com:63119/random-facts');
mongoose.connection.once('open', () => {
  console.log("connected to external MongoDB database");
});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/facts', routes);

//Error handling
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
})

app.listen(PORT, () => {
  console.log(`Now listening on PORT: ${PORT}`);
})