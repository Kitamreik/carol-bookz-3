const User = require('../models/userModel');
const siteData = require('../data/siteData');
const passport = require('passport');
// replacing bcrypt and salt rounds

module.exports = {
  videos: (request, response) => {
    response.render('pages/videos', {
        name: siteData.userName,
        copyrightYear: siteData.year
    });
  },
  index: (request, response) => {
    response.render('pages/index', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
    });
  },
  register_get:(request, response) => {
    response.render('pages/register', {
      copyrightYear: siteData.year
    });
  },
  register_post:(request, response) => {
    // added in Code Along - differs from slides
    const {username, password} = request.body;
    User.register({username: username}, password, (error) => {
      if (error) {
        console.log(error);
        response.redirect('/register');
        // check the routes folder to check --> siteRouter --> redirect trigger --> GET
      } else {
        // if they are successful 
        passport.authenticate('local')(request, response, () => {
          response.redirect('/login');
          // you created your account --> login --> GET
        });
      };
    }); // added in Code Along
  },
  login_get: (request, response) => {
    response.render('pages/login',{
      copyrightYear: siteData.year
    });
  },
  login_post: (request, response) => {
    const {username, password} = request.body;
    // console.log(`password entered is: ${password}`);
    // console logs are BAD

    // New info
    const user = new User({
      username: username,
      password: password
    });

    request.login(user, (error) => {
      if (error) {
        console.log(error)
        response.redirect('/login');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin');
        });
      }
    });
    // New info

  /*   User.findOne({username: username}, (error, foundUser) => {
  //     if (error) {
  //       console.log(`The error at login is: ${error}`);
  //     } else {
  //       passport.authenticate('local')(request, response, () => {
  //         response.redirect('/admin');
  //       });
  //     };
  /  });
  */
  },
  logout: (request, response) => {
    // new code as of 6/2022 - the correct logout function
    request.logout(function(err) {
      // destroy the session for the user
      if (err) { return next(err); }
      // redirect back to the homepage
      response.redirect('/');
    });
    // old code
    // request.logout();
    // response.redirect('/')
    
  },
  // 5-11
  google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email']}),

  google_redirect_get: [
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(req, res) {
      // Successful Authentication Authorization
      res.redirect('/admin');
    }
  ]
}