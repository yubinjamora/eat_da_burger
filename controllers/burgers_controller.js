var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    
      res.redirect("/burgers");
    
  });

  router.get("/burgers", function(req, res) {
    
    burger.all(function(data) {
      var hbsObject = {
        burger_data: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/burgers/create", function(req, res) {
    burger.create(req.body.name, function(result) {
     
      res.redirect("/");
    });
  });
  
  router.put("/burgers/update", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(req.body.name, function(result) {
      res.redirect("/");
    });
  });
  
  
  
  
  module.exports = router;
  