require('dotenv').config();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Cấu hình Passport với Facebook


passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'photos', 'email']
    
  },
  (accessToken, refreshToken, profile, done) => {
    // Trong tương lai, bạn có thể lưu người dùng vào cơ sở dữ liệu tại đây
    return done(null, profile);
  }
));



// Cấu hình Google Strategy
passport.use(new GoogleStrategy({
  clientID:process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL, 
  scope: ['profile', 'email']
}, (accessToken, refreshToken, profile, done) => {
  // Tìm người dùng trong cơ sở dữ liệu và trả về
  return done(null, profile);
}));

// Serialize và deserialize user
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

module.exports = passport;