const router = require("express").Router();
const { User, Post } = require("../models/");

router.get("/", (req, res) => {
  res.render("home", {
    layout: "main",
  });
});

router.get("/profile", (req, res) => {
  res.render("profile", {
    layout: "main",
  });
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup", {
    layout: "main",
  });
});

router.get("/search", (req, res) => {
  res.render("search", {
    layout: "main",
  });
});

router.get("/post", (req, res) => {
  res.render("post", {
    layout: "main",
  });
});

module.exports = router;
