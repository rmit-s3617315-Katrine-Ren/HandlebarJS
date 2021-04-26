// fetch product info from the json file

/* 1.Use fs.readFileSync */
// const fs = require('fs');
// const data = fs.readFileSync('models/newItem.json','utf-8');
// const products = JSON.parse(data);

/* 2.Use require() */
const products = require('./newItem.json');

exports.products=products;


