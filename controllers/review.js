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
    FurnitureObject.findById(req.params.id, function (err, furnitureItem) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        furnitureItem.reviews.push(req.body);
        furnitureItem.save(function (err) {
        console.log(furnitureItem)
        res.redirect(`/discover/${furnitureItem._id}`)
        })

    })
}




module.exports = {
    index,
    new: newReview
};

