const Router = require("express");
const Photo = require("./Photo.js");

const router = new Router();
router.get("/photos", async (req, res) => {
  try {
    const photos = await Photo.find({ albumId: req.query.albumId });
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/photos/:id", async (req, res) => {
  try {
    const photos = await Photo.find({ id: req.params.id });
    res.json(photos?.[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
