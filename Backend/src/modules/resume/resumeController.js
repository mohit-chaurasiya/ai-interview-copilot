const pdf = require("pdf-parse")

const uploadResume = async (req, res) => {
    try {

        console.log(pdf)
        const data = await pdf(req.file.buffer);

        console.log(data.text);

        res.json({
            success: true,
            text: data.text,
        })


    } catch (error) {
        console.log("Full error : ", error)
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = { uploadResume, }