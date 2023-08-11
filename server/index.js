const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { DB_URI, PORT } = process.env;

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);


mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
        // Rest of your code here
    })
    .catch((error) => {
        console.error('Failed to connect to database:', error.message);
    });

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
