const FurnitureObject = require('../models/furnitureObject');
const User = require('../models/user')

// For Wayfair API
// const axios = require('axios')
// const wayfairRootURL = 'https://api.wayfair.com';
// const wayfairURLS = [
//   "https://api.wayfair.com/v1/3dapi/models?page=1",
//   "https://api.wayfair.com/v1/3dapi/models?page=2",
//   "https://api.wayfair.com/v1/3dapi/models?page=3"
// ];
// const apiKey = process.env.WAYFAIR_TOKEN
// const userLogin = process.env.WAYFAIR_LOGIN

const index = (req, res) => {
  FurnitureObject.find({}, function (err, furniture) {
    res.render("discover/index", { title: 'Discover', products: furniture });
  });
}

const show = async (req, res) => {
  let furnitureData;
  let allFurniture;
  try {
    furnitureData = await FurnitureObject.findById(req.params.id)
    allFurniture = await FurnitureObject.find({})
  } catch (error) {
    console.error(error);
  }
  res.render("discover/show", { title: 'Product Details', furnitureDetails: furnitureData, objectPath: furnitureData.model, products: allFurniture })
}

module.exports = {
  index,
  show
};
