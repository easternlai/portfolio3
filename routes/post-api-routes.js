var db = require("../models");

module.exports = function(app){
  app.post("/api/testimonial", function(req, res){
      db.Testimonials.create(req.body).then(function(dbTestimonials){
          res.json(dbTestimonials);
      })
  })
};