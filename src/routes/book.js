const { json } = require("body-parser");
const book = require("../models/Book")
const author = require("../models/Author")


const Books = async (req, res) => {
    try {
      const result = await book.find()
      if (result.length > 0) {
        return res.json(result)
  
      } else {
        return res.json({ message: "no data found" })
      }
    } catch (error) {
      return res.json({ message: error })
    }
  
  }



const createBook = async (req, res) => {
    try {
        const { name, price, publish, author } = req.body
        book.collection.insertOne({ Name: name, Author: author, Publish: publish, Price: price },async (error, result) => {
          if (error) {
            return console.error(error);
          } else {
          
            return res.json({ message: " add book successfully ", status: true, })
          }
        })



    } catch (error) {

    }

}


const removeBooks=async(req,res)=>{
    try {
        const {id} =req.body
        book.findByIdAndRemove(id, (err, todo) => {
            if (err) return res.status(500).send({message:err});
       
            return res.status(200).send( {
              message: "Book successfully deleted",
              id: todo._id
          });
        });
        
    } catch (error) {
        
    }
}
module.exports = { createBook,Books,removeBooks }