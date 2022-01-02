const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri = "mongodb+srv://admin-hamsa:hamsaomar211@cluster0.zmwmx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database successfully established");
});

const chatRouter = require('./routes/Chat.js')

app.use('/', chatRouter);


app.listen(port, () => {
  console.log("listening on port " + port);
});
