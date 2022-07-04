

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
let { generateHashPassword, generateAccessToken } = require("../middlewares/mainFun")
const user = require("../models/user")

const Registration = async (req, res) => {

  try {
    const { name, password, phone, email } = req.body
    const oldUser = await user.find({ Email: email });
    if (oldUser.length>0) {
      console.log(oldUser)
      return res.json({ message: "User Already Exist. Please Login", status: false });
    }

    const hashPassword = await generateHashPassword(password)
    user.collection.insertOne({ Name: name, Password: hashPassword, Phone: phone, Email: email }, async (error, result) => {
      if (error) {
        return console.error(error);
      } else {
        const AccessToken = await generateAccessToken(email)
        return res.json({ message: "Registration done successfully ", Token: AccessToken, status: true, })
      }
    });

  } catch (error) {
    return res.json({ message: error, status: false, })

  }
}
const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await user.find({ Email: email })

    if (result.length > 0) {
      const match = await bcrypt.compare(password, result[0].Password)
      if (match) {
        const AccessToken = await generateAccessToken(result[0].Email, result[0])
        return res.json({ message: "Login successfully ", status: true, Token: AccessToken })

      }
      else {
        res.json({ message: "Password  not match", status: false })
      }
    }
    else {
      res.status(400).json({ message: "Invalid email", status: false })
    }

  } catch (error) {
    res.json({ message: error, status: false })
  }

}

module.exports = { Registration, Login };