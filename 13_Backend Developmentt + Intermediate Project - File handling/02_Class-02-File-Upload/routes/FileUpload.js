const express = require("express");

const router = express.Router();

const {localFileUpload, imageUpload, videoUpload} = require("../controllers/fileUpload");

router.post("/localFileUpload", localFileUpload)
.post("/imageUpload", imageUpload)
.post("/videoUpload", videoUpload);

module.exports = router;
