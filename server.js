const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/order");

const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/order", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
