const author = require("../models/Author")
const user = require("../models/user")




const createAuthor = async (req, res) => {
  try {
    const { name, age, dob, } = req.body


    author.collection.insertOne({ Name: name, Age: age, Dob: dob }, async (error, result) => {
      if (error) {
         console.error(error);
      } else {
        return res.json({ message: "add author successfully", status: true })
    
      }
    });

  } catch (error) {

  }

}


const Authors = async (req, res) => {
  try {
 
    const result = await author.find()
    if (result.length > 0) {
      return res.json(result)

    } else {
      return res.json({ message: "no data found" })
    }
  } catch (error) {
    // return res.json({ message: error })
  }

}
module.exports = { createAuthor, Authors }