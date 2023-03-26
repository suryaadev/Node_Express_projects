const express = require("express");
const app = express();
const port = 5000;
const routes = require("./routes/tasks");

// middleware

app.use(express.json())

// routes
app.get("/hello", (req, res) => {
  res.send("HOME");
});

app.use('/api/v1/tasks', routes)


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
