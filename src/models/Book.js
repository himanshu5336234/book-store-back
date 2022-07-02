const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Publish: {type: Date},
    Price:{type:Number ,require:true},
    Author:{ type:  mongoose.Schema.Types.ObjectId, ref: 'Authors'},
  

  });
  


  // Model
var Book = mongoose.model('Book', BookSchema, "Books");

// compile schema to model

module.exports = Book