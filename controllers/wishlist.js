const FurnitureObject = require('../models/furnitureObject');
const User = require('../models/user')

const newWishItem = async (req, res) => {
    try {
        const newWishItem = await FurnitureObject.findById(req.params.id);
        console.log(newWishItem)
        const currentUser = await User.findById(req.user.id)
        console.log(currentUser)
        await currentUser.wish_list.push(newWishItem)
        currentUser.save()
        console.log(currentUser)
    } catch (err) {
        console.log(err)
    }
    res.redirect('/wishlist')
}

const index = (req, res) => {
    const currentUser = User.findById(req.user.id)
        .populate('wish_list')
        .exec(function (err, userData) {
            const wishList = userData.wish_list
            res.render("wishlist/index", { wishList: wishList, title: "My Furniture" });
        })
}

module.exports = {
    index,
    new: newWishItem,
};

