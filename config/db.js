const mongoose = require('mongoose')



mongoose.connect("mongodb+srv://vengatesh:j6rocR6RpdPVoPxi@cluster0.qsobhah.mongodb.net/Blogapp?retryWrites=true&w=majority" , (err) => {
    if(!err){
        console.log("Successfully connected into Database!")
    }else{
        console.log("Error! plz try again")
    }

})