

const JwtStrategy = require('passport-jwt').Strategy
const  ExtractJwt = require('passport-jwt').ExtractJwt;
const  Auth = require('../models/auth')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

var opts = {}


opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    Auth.findById(jwt_payload.user._id, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });

}));

