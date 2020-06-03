const router = require("express").Router();
let Project = require("../models/project.model");

router.route("/").get((req, res) => {
  Project.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const subject = req.body.subject;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newProject = new Project({
    name,
    subject,
    description,
    date,
  });

  newProject
    .save()
    .then(() => res.json("Project added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Project.findById(req.params.id)
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json("Project deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/update/:id").post((req, res) => {
  Project.findById(req.params.id)
    .then((project) => {
      project.name = req.body.name;
      project.subject = req.body.subject;
      project.description = req.body.description;
      project.date = Date.parse(req.body.date);

      project
        .save()
        .then(() => res.json("Project updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;