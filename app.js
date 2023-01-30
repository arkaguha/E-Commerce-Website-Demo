const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

const app = express();
const errorController = require('./controllers/error');
 
app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');
const shopRoutes = require('./routes/shop');
//const pageNotFoundRoutes = require('./routes/404');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(homeRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

// app.use(pageNotFoundRoutes);



app.listen(port,() => {
    console.log(`=> Listening to port: ${port}`);
});