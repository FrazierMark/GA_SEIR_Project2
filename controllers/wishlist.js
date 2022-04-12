const FurnitureObject = require('../models/furnitureObject');
const User = require('../models/user')
const axios = require('axios')



// const index = async (req, res) => {
//     let wayfairData = {}
//     const options = {
//         method: 'GET',
//         url: wayfairURLS[0],
//         auth: {
//             username: userLogin,
//             password: apiKey
//         }
//     };

//     // try {
//     //     wayfairData = await axios.request(options)
//     //     console.log(wayfairData.data)
//     // } catch (error) {
//     //     console.error(error);
//     // }
//   res.render("wishlist/index", { title: 'Wish List',  })
// };

const newWishItem = async (req, res) => {
    console.log(JSON.stringify(req.body))
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

