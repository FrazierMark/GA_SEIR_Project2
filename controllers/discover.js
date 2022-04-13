const FurnitureObject = require('../models/furnitureObject');
const User = require('../models/user')
const axios = require('axios')
const wayfairRootURL = 'https://api.wayfair.com';
const wayfairURLS = [
  "https://api.wayfair.com/v1/3dapi/models?page=1",
  "https://api.wayfair.com/v1/3dapi/models?page=2",
  "https://api.wayfair.com/v1/3dapi/models?page=3"
];
const apiKey = process.env.WAYFAIR_TOKEN
const userLogin = process.env.WAYFAIR_LOGIN


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
//   res.render("discover/index", { title: 'Models',  })
// };



const index = (req, res) => {
  FurnitureObject.find({}, function (err, furniture) {
    res.render("discover/index", { title: 'Discover', products: furniture });
  });
}


const show = async (req, res) => {
  let furnitureData;
  try {
    furnitureData = await FurnitureObject.findById(req.params.id)
  } catch (error) {
    console.error(error);
  }
  res.render("discover/show", { title: 'Product Details', furnitureDetails: furnitureData, objectPath: furnitureData.model })
}


module.exports = {
  index,
  show
};
