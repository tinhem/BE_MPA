const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const dbConnect = require("./config/db");
const app = express();
require("dotenv").config();
const route = require("./routes/index");

const morgan = require("morgan");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

// connect to database
dbConnect();

route(app);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
