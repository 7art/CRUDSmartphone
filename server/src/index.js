const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require("./routes/index"));
app.use(express.static(path.join(__dirname, "../build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.use(function (req, res, next) {
  res.status(404).send("Unable to find the requested resource!");
});

app.listen(port, () => console.log(`Server on port ${port}!`));
