const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const reviewSchema = new mongoose.Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});



const noteSchema = new mongoose.Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});


const furnitureObjectSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: true,
        unique: true
    },
    product_name: {
        type: String,
        required: true,
        unique: true
    },
    product_description: {
        type: String,
        required: true,
        unique: true
    },
    class_name: {
        type: String
    },
    product_page_url: {
        type: String,
        required: true,
        unique: true
    },
    class_name: {
        type: String
    },
    sale_price: {
        type: Number
    },
    thumbnail_image_url: {
        type: String
    },
    model: {
        type: String
    },
    reviews: [reviewSchema],
    notes: [noteSchema]

}, {
    timestamps: true
});
module.exports = mongoose.model('FurnitureObject', furnitureObjectSchema);