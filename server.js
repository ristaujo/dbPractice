const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const dogs = require("./routes/dog-route");
const owners = require("./routes/owner-route");

app.use("/portal", dogs);
app.use("/portal", owners);

app.use(express.static(__dirname + "/public"));


let port = 5500;
app.listen(port, () => console.log(`listening on port ${port}.`));
