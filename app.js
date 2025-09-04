require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
// added in Code Along
const session = require('express-session');
const passport = require('passport');
// added in Code Along

const routes = require('./routes/index');
const app = express();
// const PORT = 3000;
// added code along
const PORT = process.env.PORT || 3300;

app.set('view engine', 'ejs');

// Middleware Central Area -> app.use
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));

// added in Code Along
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false, // always set to false --> forces a session to be unitialized from the store. anew but not modified. reduces storage in server. This is why you do not keep it in a cookie in the browser in a session is not good. Servers protect data.
   
    saveUninitialized: false  // see above
}))

app.use(passport.initialize());
app.use(passport.session());
// added in Code Along

app.use(routes);

require('./config/connection');

const user_url = process.env.USER_URL;

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`To track users: ${user_url}`)
});


