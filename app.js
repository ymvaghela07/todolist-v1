const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var todoItems = [];

app.set("view engine", "ejs"); //this tells our app to use EJS as "view engine"
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-IN", options);

  res.render("list", {
    kindOfDay: day,
    newItems: todoItems,
  });
});

app.post("/", function (req, res) {
  var item = req.body.todo;
  todoItems.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
