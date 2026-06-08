const express = require('express');
const router = express.Router()

const upload = require('./uploadMiddleware')
const { uploadResume } = require('./resumeController')

// upload pdf

router.post("/upload",
    upload.single("resume"),
    uploadResume
)


module.exports = router