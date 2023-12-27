const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./confing/conn");

const app = express();

const userRoute = require("./router/router");

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/serverData", userRoute);

app.listen(PORT, () => {
  console.log(`Server is started ${PORT}`);
});
