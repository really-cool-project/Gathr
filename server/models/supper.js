const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supperSchema = new Schema({
    title: String,
    name: String,
    date: String,
    time: String,
    price: String,
    description: String,
    photo: String,
    spots: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

module.exports = mongoose.model("supper", supperSchema);