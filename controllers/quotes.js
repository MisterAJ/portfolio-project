const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.render("quotes/index")
});

module.exports = router;