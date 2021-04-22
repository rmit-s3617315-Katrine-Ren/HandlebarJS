// fetch product info from the json file

const fs = require('fs');

const data = fs.readFileSync('models/newItem.json','utf-8');
const products = JSON.parse(data);

exports.products=products;


