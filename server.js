const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define your server-side endpoint
  server.get("/api/current-time", (req, res) => {
    const currentTime = new Date().toLocaleString();
    res.status(200).json({ currentTime });
  });

  // Handle all other routes using Next.js request handler
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("Express server is running on port 3000");
  });
});
