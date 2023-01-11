const express = require("express");
const resolvePeople = require('./resolve/people');
const resolveZones = require('./resolve/zones');

const app = express();

app.get("/people", resolvePeople);
app.get("/zones", resolveZones);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});