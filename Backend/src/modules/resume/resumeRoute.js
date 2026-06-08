const express = require('express');
const router = express.Router()

const upload = require('./uploadMiddleware')

// upload pdf

router.post("/upload",
    upload.single("resume"),
    (req, res) => {
        console.log(req.file);

        res.json({
            success: true,
            message: "Resume upload successfully"
        })
    }
)


module.exports = router