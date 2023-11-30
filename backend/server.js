const express = require('express');
const cors = require('cors');
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

  const appRouter = require('./routes/authRoutes');

  app.use('/', appRouter)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})