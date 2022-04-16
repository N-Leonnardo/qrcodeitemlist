const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
    required: [true, "Name is required"],
    unique: [true, "Name should be unique"],
    minlength: [2, "Name must be at least 2 characters"]}
    ,
    type: {
        type: String,
    required: [true, "Type is required"],
    minlength: [2, "Name must be at least 2 characters"]
},
    desc: {
        type: String,
    required: [true, "Description is required"],
    minlength: [2, "Name must be at least 2 characters"]
},
    barcode: {
        type: String,
        required: [true, "Barcode is required"],
        minlength: [2, "Barcode should be at least 2 characters"]

    },
    img: {
        type: String,
        required: [true, "Image is required"]}


},{timestamps: true });

module.exports.Item = mongoose.model("Item", ItemSchema);