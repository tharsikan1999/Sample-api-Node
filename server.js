const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const getRoutes = require("./Routes/get");
const deleteRoutes = require("./Routes/delete");

const port = process.env.SERVER_PORT || 3000;

app.use(getRoutes);
app.use(deleteRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
