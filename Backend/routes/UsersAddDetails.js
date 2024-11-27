const express = require("express");
const router = express.Router();
const userModel = require("../models/UsersAdd");
require('dotenv').config()

// change
const nodemailer = require('nodemailer')

router.get('/', async (req, res) => {
  const data = await userModel.find({});
  res.json({ success: true, data: data });
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
console.log("email",process.env.EMAIL_USER)

// router.post("/create", async (req, res) => {
//   console.log(req.body);
//   const data = new userModel(req.body);
//   await data.save();
//   res.send({ success: true, message: "Data saved successfully", data: data });
// });

router.post('/create',  async (req, res) => {
  try {
    const { username, email, password, userType, userRoll, mobile} = req.body;

    // const saltRounds = 10;
    // const hashedPassword = await bcrypt.hash(password, saltRounds);



    const Userdetails = new userModel({

      username ,
      email ,
      password ,
      userType ,
      userRoll ,
      mobile 

    });

    await Userdetails.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Account Details',
      text: ` Hello welcome to Takeoff Tracker. Your account has been created with the following details:
      - Username: ${username}
      - Password: ${password}
      - Email: ${email}
Login to your profile using this email id and password`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Added new employee and manager and email sent.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});







router.put("/update", async (req, res) => {
  console.log(req.body);
  const { _id, ...rest } = req.body;
  console.log(rest);
  const data = await userModel.updateOne({ _id: _id }, rest);
  res.send({ success: true, message: "Data updated successfully", data: data });
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await userModel.deleteOne({ _id: id });
  res.send({ success: true, message: "Data deleted successfully", data: data });
});




router.get('/userdetails/:userType', async (req, res) => {
  try {
      console.log("sgdfh")
      console.log(req.params.userType ,"hj")
      const Userdetails = await userModel.find({ userType: req.params.userType });
      console.log(Userdetails)
      res.status(200).json(Userdetails);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching leave history', error });
  }
});


router.get('/users/:userType', async (req, res) => {
  try {
      console.log("sgdfh")
      console.log(req.params.userType ,"hj")
      const AllUsers = await userModel.find({ userType: req.params.userType });
      console.log(AllUsers)
      res.status(200).json(AllUsers);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching leave history', error });
  }
});











module.exports = router; 
