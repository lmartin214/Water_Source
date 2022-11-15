const router = require("express").Router();
const { Post, User } = require("../../models");

// The `/api/products` endpoint

// get all products
router.get("/", (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
});

//get posts by country
// get posts by zip
router.get("/:zip", async (req, res) => {
  try {
    const postZip = await User.findAll(req.params.zip);
    if (!userData) {
      res.status(404).json({ message: "No posts with this zip code!" });
      return;
    }
    console.log(postZip);
    res.status(200).json(postZip);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new post
router.post("/", async (req, res) => {
  console.log("in the route");
  try {
    const newPost = await Post.create({
      type: req.body.type,
      country: req.body.country,
      zip: req.body.zip,
      state: req.body.state,
      accessibility: req.body.accessibility,
      whichTests: req.body.whichTests,
      footTraffic: req.body.footTraffic,
      trailDifficulty: req.body.trailDifficulty,

      parking: req.body.parking,
      // depth: req.body.depth,
      dogs: req.body.dogs,
    });
    console.log("new post");
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
