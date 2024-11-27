const express = require("express");
const router = express.Router();
const User = require("../models/User");
const userModel = require("../models/UsersAdd");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Admin registration
router.post("/register", async (req, res) => {
  try {
    // const {} = userDetails
    const userDetails = req.body;
    const username = userDetails.userName;
    const password = userDetails.password;
    const email = userDetails.email;
    const userType = userDetails.userType;
    // const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      email,
      userType,
    }); //create the database
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

// Admin login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);
    const user = await User.findOne({ email });
    console.log(user, "userasdfg");
    if (!user) {
      return res
        .status(401)
        .json({ error: "Authentication failed- User doesn't exists" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Authentication failed- password doesn't match" });
    }
    const token = jwt.sign(
      { username: user.username, userType: user.userType },
      "your-secret-key",
      {
        expiresIn: "1h",
      }
    );

    res.cookie("Authtoken", token);
    res.json({
      status: true,
      message: "login success",
      token,
      userType: user.userType,
    });
    //  console.log('/login in the bakend res', res)
    return res;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Login failed" });
  }
});

// UserManagerlogin
router.post("/Userlogin", async (req, res) => {
  try {
    const { email, password, userType } = req.body;

    console.log(email, password, userType);
    const user = await userModel.findOne({ email });
    console.log(user, "user");
    if (!user) {
      return res
        .status(401)
        .json({ error: "Authentication failed- User doesn't exists" });
    }
    console.log("sd");

    if (password === user.password) {
      console.log("sqwertyd");
      const token = jwt.sign(
        { username: user.username, userType: user.userType },
        "your-secret-key",
        {
          expiresIn: "1h",
        }
      );

      // above code hours mention how much hr valid that token
      res.cookie("Authtoken", token);
      res.json({
        status: true,
        message: "login success",
        token,
        userType: user.userType,
      });
      //  console.log('/login in the bakend res', res)
      return res;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Login failed" });
  }
});

// Logout
router.get("/logout", (req, res) => {
  console.log("reach");
  res.clearCookie("Authtoken");
  res.status(200).send("Logout successful");
  return res;
});

module.exports = router;
