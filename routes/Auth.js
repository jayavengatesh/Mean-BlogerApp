const express = require('express');
const route = express.Router()
const bcrypt = require('bcrypt');
const Auth = require('../models/auth');
const jwt = require('jsonwebtoken');
const key = 'secret'
const passport = require('passport');
const auth = require('../models/auth');
const {body , validationResult} = require('express-validator');
const cors = require('cors')

//authentication starts here;


//register form




route.post('/register', async (req,res,next) => {     
    try{ 
    const EncryptedPassword = await bcrypt.hash(req.body.password,10);
    const users = Auth({
     name:req.body.name,
     email:req.body.email,
     username:req.body.username,
     password:EncryptedPassword
    })
     users.save();
     const token = jwt.sign({user_id:users._id ,username:users.username} , key , {expiresIn:"5h"})
     users.token = token;
     res.json({
         message:"Registered sucessfully!" +users.token
     })
 

    }catch(e){
      console.log(e)
    }

    next()

 })
 
 
 //loginform
 

 route.post('/login', async (req, res, next) => {
   try{
   
    const {username,password } = req.body
    const user  = await auth.findOne({username})
     
    if(user && ( await bcrypt.compare(password,user.password))){
      const token = jwt.sign({user:user},key,{expiresIn:"5h"})
      res.status(200).send({token:token,userid:user._id,user:username})
    }else{
      res.status(401).json({message:"username and password not valid!"})
    }
    
  }
   catch(e){
     console.log(e)
   } 

  })



route.get('/profile', passport.authenticate('jwt',{ session:false}),(req,res) => {
   res.json({username: req.user});
})
  

 
 module.exports = route