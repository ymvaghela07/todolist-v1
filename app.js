const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let todoItems = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs"); //this tells our app to use EJS as "view engine"
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-IN", options);

  res.render("list", {
    kindOfDay: day,
    newItems: todoItems,
  });
});

app.post("/", function (req, res) {
  let item = req.body.todo;
  todoItems.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
