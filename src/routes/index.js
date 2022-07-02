const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const {auth}=require("../middlewares/auth")
const { Registration ,Login} = require("./users")
const {createAuthor,Authors} =require("./Author")
const {createBook,Books,removeBooks} =require("./book")
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.use(urlencodedParser)
router.use(bodyParser.json())


router.get("/auth/author",auth,Authors)
router.post("/auth/author",auth,createAuthor)
router.post("/signup",Registration);
router.post("/signin",Login);

router.post("/auth/book" ,auth,createBook)
router.get("/auth/book",auth ,Books)
router.post("/auth/book/delete" ,auth,removeBooks)
module.exports = router;


