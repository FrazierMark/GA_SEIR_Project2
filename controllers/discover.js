const FurnitureObject = require('../models/furnitureObject');
const Note = require('../models/note');
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
  


const index = (req, res) => {

  const options = {
    method: 'GET',
    url: 'https://api.wayfair.com/v1/3dapi/models?page=2',
    auth: {
      username: userLogin,
      password: apiKey
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  const wayfairData = JSON.parse(response)
  console.log(wayfairData)


    res.render("discover/index", { products: wayfairData })
}





module.exports = {
    index
  };
  