import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello i am root");
});
//we can send parameter
app.get("/:username/:id", (req, res) => {
  const { username, id } = req.params;
  res.send(`the username is ${username}!`);
});

//query string
app.get("/search", (req, res) => {
  console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send("nothing search");
  } else {
    res.send(`query is :${q}`);
  }
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
