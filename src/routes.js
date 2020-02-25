const express = require("express");
const routes = express.Router();

routes.get("/", function(req, res) {
  return res.render("layout.njk")
});

routes.get("/products/create", );

routes.get("/ads/create", function(req, res) {
  return res.redirect("/products/create")
});



module.exports = routes;