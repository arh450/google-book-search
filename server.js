const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, "client/build")));

// Express boilerplate middleware
// =============================================
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
// =============================================
app.use("/api", routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Everything that is not an api request is sent to index.html
// for client side routing.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
