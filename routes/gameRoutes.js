const express = require("express");
const GameInfo = require("../models/Game");
const router = express.Router();

// Get all games
router.get("/", async (req, res) => {
  try {
    let games = await GameInfo.find({});
    res.status(200).json(games);
    console.log("Game Routing", games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
