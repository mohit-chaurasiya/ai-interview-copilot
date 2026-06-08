const express = require('express');
const router = express.Router()

const upload = require('./uploadMiddleware')
const { uploadResume, getLatestResume } = require('./resumeController')

// upload pdf

router.post("/upload",
    upload.single("resume"),
    uploadResume
)
router.get("/latest", getLatestResume);

module.exports = router