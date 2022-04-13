const FurnitureObject = require('../models/furnitureObject');
const User = require('../models/user')
const axios = require('axios')





const newWishItem = async (req, res) => {
    console.log(req.body)
    const newItem = new FurnitureObject(req.body);
    try {
        const savedNewItem = await newItem.save()
        console.log(savedNewItem)
    } catch (err) {
        console.log(err)
    }
    res.redirect('/wishlist')
}


const index = (req, res) => {
    FurnitureObject.find({}, function (err, furniture) {
        res.render("wishlist/index", { furniture, title: "My Furniture" });
    });
}



module.exports = {
    index,
    new: newWishItem
};
