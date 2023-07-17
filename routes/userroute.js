const express = require("express");
const { UserModel } = require("../schema/userschema");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const { username, email } = req.body;
    const existing = await UserModel.findOne({email: email});
    if(existing){
        res.status(201).send({"message":"existing user"});
    }else{
        const newUser = await UserModel({username, email});
        await newUser.save();
        res.status(200).send({"message":"success"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = {
    userRouter
}
