const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const { engine } = require('express-handlebars');

require('dotenv').config();
console.log(process.env.FACEBOOK_APP_ID, process.env.FACEBOOK_APP_SECRET);


const app = express();

//static file
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine('hbs', engine({
    extname:".hbs",
    helpers:{
        sum : (a,b) => a+b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));



// Cấu hình phiên
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));

// Khởi tạo Passport
app.use(passport.initialize());
app.use(passport.session());
// Định nghĩa các route
const routers = require('./routes/index');
routers(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});