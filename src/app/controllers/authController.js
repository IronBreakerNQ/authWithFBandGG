const passport = require('passport');
class AuthController {
    facebookAuth = (req,res) =>{
        passport.authenticate('facebook')(req,res);
    }

    facebookCallback  = (req,res) => {
        passport.authenticate('facebook',{failureRedirect: '/'}, (err, user) =>{
            if (err || !user) {
                return res.redirect('/');
            }
            req.logIn(user, (err) => {
                if (err) {
                    return res.redirect('/');
                }
                console.log(user);
                return res.json(user);
            });
        })(req,res);
    } 

    googleAuth = (req,res) =>{
        passport.authenticate('google')(req,res);
    }

    googleCallback  = (req,res) => {
        passport.authenticate('google',{failureRedirect: '/'}, (err, user) =>{
            if (err || !user) {
                return res.redirect('/');
            }
            req.logIn(user, (err) => {
                if (err) {
                    return res.redirect('/');
                }
                console.log(user);
                return res.json(user);
            });
        })(req,res);
    } 

    homePage = (req,res) => {
        res.render('LoginGoogleFaceBook');
    }  
}

module.exports = new AuthController;