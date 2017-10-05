const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");


const config = require("./config");
const supperRoute = require("./routes/supper");
const authRoute = require("./routes/auth");
const profileRoute = require("./routes/profile");
const publicRoute = require("./routes/public.js")

const PORT = config.PORT;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/supper", supperRoute);
app.use("/auth", authRoute);
app.use("/profile", profileRoute);
app.use("/public", publicRoute);

mongoose.connect(config.db, () => {
    console.log("CONNECTED ON " + config.db);
    app.listen(PORT, () => {
        console.log("CONNECTED ON PORT " + PORT);
    });
});

