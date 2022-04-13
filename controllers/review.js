const FurnitureObject = require('../models/furnitureObject');
const User = require('../models/user')


const index = async (req, res) => {
    let furnitureData;
    try {
        furnitureData = await FurnitureObject.findById(req.params.id)
    } catch (error) {
        console.error(error);
    }

    res.render("review/index", { title: 'Product Review', furnitureDetails: furnitureData, objectPath: furnitureData.model })
}


const newReview = (req, res) => {
    FurnitureObject.find({}, function (err, furniture) {
        res.redirect("discover/:id", { furniture, title: "My Furniture" });
    });
}



module.exports = {
    index,
    new: newReview
};

