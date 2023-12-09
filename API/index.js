const express = require("express");

require("dotenv").config();

const { startAPI, server } = require("./handler");
const database = require("./db");

const app = express();

async function startServer() {
  await server.start();

  startAPI(app);

  await database.dbConnect();

  // eslint-disable-next-line no-console
  app.listen(process.env.PORT, () => console.log(`API Server listening on port ${process.env.PORT}...`));
}

startServer();
