const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const items = [
    { name: "name1", important: "Yes" },
    { name: "name2", important: "No" },
    { name: "name3", important: "Yes" },
  ];
  res.render("index", { items });
});

app.get("/add-item", (req, res) => {
  res.render("add-item");
});
app.use((req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
