const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/", (req, res) => {
  let error = req.flash("error");
  res.render("index", { error, loggedin: false });
});

router.get("/shop", isLoggedIn, async (req, res) => {
  let products = await productModel.find();
  let success = req.flash("success");
  let error = req.flash("error");
  res.render("shop", {
    products,
    loggedin: true,
    success,
    error,
    user: req.user,
  });
});

router.get("/profile", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  res.render("profile", { user, loggedin: true });
});

router.get("/cart", isLoggedIn, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("cart");
  let bill = Number(
    user.cart.reduce(
      (acc, item) =>
        acc + Number(item.price) * (1 - Number(item.discount) / 100),
      0,
    ) + 20,
  );
  res.render("cart", { user, bill, loggedin: true });
});

router.get("/addtocart/:productid", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  user.cart.push(req.params.productid);
  await user.save();
  req.flash("success", "Added To Cart");
  res.redirect("/shop");
});

router.get("/removefromcart/:productid", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  let index = user.cart.findIndex(
    (id) => id.toString() === req.params.productid
  );
  if (index > -1) user.cart.splice(index, 1);
  await user.save();
  res.redirect("/cart");
});

module.exports = router;
