const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async (req, res) => {
  try {
    let { email, fullname, password } = req.body;

    let userCheck = await userModel.findOne({ email: email });
    if (userCheck) {
      req.flash("error", "Account already exists");
      return res.redirect("/");
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          return res.send(err.message);
        } else {
          let user = await userModel.create({
            email,
            password: hash,
            fullname,
          });

          let token = generateToken(user);
          res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
          });
          res.redirect("/shop");
        }
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.loginUser = async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email: email });

  if (!user) {
    req.flash("error", "Email or password Incorrect");
    return res.redirect("/");
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = generateToken(user);
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      }).redirect("/shop");
    } else {
      req.flash("error", "Email or password Incorrect");
      return res.redirect("/");
    }
  });
};

module.exports.logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

module.exports.editUser = async(req,res)=>{
  try {
    let { fullname, contact } = req.body;
    let updateData = { fullname, contact };

    if (req.file) {
      let base64 = req.file.buffer.toString("base64");
      updateData.picture = `data:${req.file.mimetype};base64,${base64}`;
    }

    await userModel.findOneAndUpdate({ email: req.user.email }, updateData);
    res.redirect("/profile");
  } catch(err) {
    res.send(err.message);
  }
}
