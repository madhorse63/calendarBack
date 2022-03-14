module.exports = app => {
  const calendar = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", calendar.create);

  // Retrieve all Tutorials
  router.get("/", calendar.findAll);

  // Retrieve all published Tutorials
  router.get("/published", calendar.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", calendar.findOne);

  // Update a Tutorial with id
  router.put("/:id", calendar.update);

  // Delete a Tutorial with id
  router.delete("/:id", calendar.delete);

  // Create a new Tutorial
  router.delete("/", calendar.deleteAll);

  app.use("/api/calendar", router);
};
