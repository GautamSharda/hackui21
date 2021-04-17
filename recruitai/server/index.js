// Setup Express
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../build")));
/* ======================================================================================== */

// Backup serve to index, backup for refresh
const ENDPOINTS = [
  "/",
  "/tasks",
  "/tasks/submit",
  "/shop",
  "/about",
  "/leaderboard",
  "/login",
  "/signup",
];
ENDPOINTS.map((endpoint) => {
  app.get(endpoint, (request, response) => {
    response.sendFile(path.resolve(__dirname, "../build/index.html"));
  });
});

// Status code 404 middleware
app.use(function (request, response) {
  response.status(404);
  response.send("<h1>404: File Not Found</h1><p>howd you get here</p>");
  response.end();
});

// Status code 500 middleware
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.send(err);
  res.end();
});

// Start Server
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
