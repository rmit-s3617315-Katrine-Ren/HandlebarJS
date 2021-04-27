// Create an express app by importing modules
const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const expHandlebars = require('express-handlebars');

// Tell the app to use the resources
app.use(express.static(__dirname+"/public"));
//body-parser is now a part of the Express
app.use(express.json());
app.use(express.urlencoded());

//Handlebars setting
app.set('view engine','hbs');
app.engine('hbs',expHandlebars({
    extname:'hbs',
    defaultLayout:'index',
    //next two lines is optional if the dirname is not changed to sth else
    layoutsDir:__dirname+'/views/layouts',
    partialsDir:__dirname+'/views/partials'

}));

//Data pass in
const {video,audio,slideshows} = require('./models/media');
const {projects} = require('./models/portfolio');
const {products}= require('./models/products');


const port = 8900;
app.listen(port);
console.log(`Listening to server http://localhost:${port}`);

//Landing page
app.get('/',(req,res)=>{res.render('main',{title:'Welcome to my mini portfolio!',video:video,audio:audio,slideshows:slideshows})});

//other pages
app.get('/about',(req,res)=>{res.render('about',{title:'About Me'})});

app.get('/contact',(req,res)=>{res.render('contact',{title:'Contact Us'})});

app.get('/portfolio',(req,res)=>{res.render('portfolio',{title:'My Showcase',projects:projects})});

//adding a Product page
app.get('/products',(req,res)=>{res.render('products',{title:'New Product',products:products})});

app.get('*',(req,res)=>{res.render('notFound',{title:'Page Not Found'})});

