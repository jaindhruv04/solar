const express = require("express");
const router = express.Router();

const productModel = require("../models/product-model");
const upload = require("../config/multer-config");
const isLoggedIn = require("../middlewares/isLoggedIn");
const isAdmin = require("../middlewares/isAdmin");

router.post("/create", isLoggedIn, isAdmin, upload.single("image"), async (req, res) => {
  try {
    let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    if (!req.file) {
      req.flash("error", "Product image is required");
      return res.redirect("/owners/admin/create");
    }

    let product = await productModel.create({
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
      image: req.file.buffer,
    });

    req.flash("success", "Product Created Successfully");

    res.redirect("/owners/admin");
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
