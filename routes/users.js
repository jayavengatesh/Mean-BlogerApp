
const express = require('express');
const routes = express.Router();
const article = require('../models/article')





//crud functionality starts

//for posting data
routes.post('/' , async(req,res) => {
   try{
    const users =article({
        author:req.body.author,
        title:req.body.title,
        content:req.body.content
    }) 
   
    if(users){
         await users.save();
         res.status(200).send(users+ "uploded!")
    }else{
      res.status(401).send({message:"Failed to upload!"})
    }
   }catch(e){
     console.log(e);
   }
})

//to get all users data

 routes.get('/data' ,async (req,res) => { 
    try{
        const data = await article.find();
        if(data){
         res.status(200).send(data);
        }else{
         res.status(401).send({message:"Error while retriving data"})
        }
    }catch(e){
       console.log(e)
    }
     
 })


// To access a pariticular data

routes.get('/data/:id', async(req,res) => {
   try{
    const id = req.params.id;
    const users = await article.findById(id);
    if(users){
      res.status(200).send(users)
    }else{
      res.status(401).send({message:"Error occured Plz try again?"})
    }
   }catch(e){
    console.log(e);
   }
})


//To edit and update a data

routes.put('/edit/:id' ,async(req,res) => {
 try{
    const id = req.params.id;
    const users = {
      author:req.body.author,
      title:req.body.title,
      content:req.body.content
    };
      const update = await article.findByIdAndUpdate(id ,{$set :users} ,{new:true});
      if(update){
      res.send("updated Successfully" + update)
    }else{
      res.status(401).send({message:"plz fill in all data"})
    }
    
   
 }catch(e){
  console.log(e);
 }
})

//To delete particular data using its id;
routes.delete('/delete/:id' , async(req,res) => {
   try{
    const id = req.params.id;
    const deleteuser =await article.findByIdAndDelete(id);
    res.send("deleted successfully!")
   }catch(e){
     console.log(e)
   }
})






module.exports = routes