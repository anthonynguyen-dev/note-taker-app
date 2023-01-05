const express = require("express");
const fs = require("fs");
// Importing our routes from our routes folder
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// telling our server to use these routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// localhost:3001/api

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
