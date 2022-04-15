const FurnitureObject = require('../models/furnitureObject');
const User = require('../models/user')

const newWishItem = async (req, res) => {
    try {
        const newWishItem = await FurnitureObject.findById(req.params.id);
        const currentUser = await User.findById(req.user.id)
        await currentUser.wish_list.push(newWishItem)
        currentUser.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect('/wishlist')
}

const index = async (req, res) => {
    const currentUser = await User.findById(req.user.id)
        .populate('wish_list')
        .exec(function (err, userData) {
            const wishList = userData.wish_list
            const randomItem = wishList[Math.floor(Math.random() * wishList.length)]
            res.render("wishlist/index", { wishList: wishList, title: "My Furniture", objectPath: randomItem.model });
        })
}

const deleteWishItem = async (req, res) => {
    try {
        const currentUser = await User.findById(req.user.id)
        const index = currentUser.wish_list.indexOf(req.params.id)
        await currentUser.wish_list.splice(index, 1)
        currentUser.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect('/wishlist')
}


module.exports = {
    index,
    new: newWishItem,
    delete: deleteWishItem
};

