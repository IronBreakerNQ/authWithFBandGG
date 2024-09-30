const authRoutes = require('./authRoutes');
const home = require('./home');

function route(app){
    app.use('/auth',authRoutes);
    app.use('/',home);
}

module.exports = route;