const Product = require('../models/products')

exports.getAddProducts = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/shop');
};

exports.getProducts = (req, res, next) => {    
  const products = Product.fetchAll();
  res.render('shop',{
    prods: products,
    pageTitle: 'Shop',
    path: '/shop',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
};

exports.home =  (req, res, next) => {
  res.render('home',{
    pageTitle: 'Home',
    path: '/',
    //hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
};
