//package imports
const express = require("express");
const mongoose =  require('mongoose');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
require("dotenv").config();

//routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const catRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

//mongoose database connection
mongoose.connect(process.env.DATABASE, {})
    .then(() => console.log("ecomm_db connected"));


//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", catRoutes);
app.use("/api", productRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})