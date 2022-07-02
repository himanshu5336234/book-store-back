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
        book.collection.insertOne({ Name: name, Author: author, Publish: publish, Price: price })
        .then((res)=>{
         return author.collection.findOneAndUpdate({ _id: req.params.id }, {$push: {Books: res._id}}, { new: true });
        })


    } catch (error) {

    }

}


const removeBooks=async(req,res)=>{
    try {
        const {id} =req.body
        book.findByIdAndRemove(id, (err, todo) => {
            // As always, handle any potential errors:
            if (err) return res.status(500).send(err);
            // We'll create a simple object to send back with a message and the id of the document that was removed
            // You can really do this however you want, though.
            const response = {
                message: "Todo successfully deleted",
                id: todo._id
            };
            return res.status(200).send(response);
        });
        
    } catch (error) {
        
    }
}
module.exports = { createBook,Books,removeBooks }