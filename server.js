const express = require('express');
const app = express();
const mongodb =require('./config/db');
const authroute = require('./routes/Auth');
const usersRoutes = require('./routes/users')
const cookie = require('cookie-parser');
const passport = require('passport');
const session = require('express-session')
const cors = require('cors')


app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    origin: ['http://localhost:4200', 'https://www.google.com/']
}));


app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'secret' 
}))
app.use(cookie());
app.use(passport.initialize());
app.use(passport.session())

require('./config/passport')

app.use('/auth',authroute);
app.use('/users',usersRoutes);


app.get('*' , (req,res) => {
    res.sendFile(('public/index.html'))
})





app.listen(3300, () => console.log("Service started at 3000"));