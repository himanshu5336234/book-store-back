const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Age:{type:Number,required:true},
    Dob:{type: Date,required:true},
    Books:[{ type:  mongoose.Schema.Types.ObjectId, ref: 'Books'}],
    date_created: {type: Date, default: Date.now},

  });
  


  // Model
const Author = mongoose.model('Author', AuthorSchema, "Authors");

// compile schema to model

module.exports = Author