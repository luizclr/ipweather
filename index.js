const { join } = require("path");

const fallback = require("express-history-api-fallback");
const express = require("express");

const app = express();
const root = join(__dirname, "build");
app.use(express.static(root));
app.use(fallback("index.html", { root }));
app.listen(process.env.PORT || 3000);
