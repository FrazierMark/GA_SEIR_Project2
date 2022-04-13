const FurnitureObject = require('../models/furnitureObject');
const User = require('../models/user')




const index = async (req, res) => {
    // save item in db 
    console.log(req.body)
    const newItem = new FurnitureObject(req.body);
    try {
        const savedNewItem = await newItem.save()
        console.log(savedNewItem)
    } catch (err) {
        console.log(err)
    }

    res.redirect(`/review/:${newItem._id}`)
}


const newReview = (req, res) => {
    FurnitureObject.find({}, function (err, furniture) {
        res.render("wishlist/index", { furniture, title: "My Furniture" });
    });
}



module.exports = {
    index,
    new: newReview
};

