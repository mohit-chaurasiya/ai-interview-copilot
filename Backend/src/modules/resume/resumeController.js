const pdf = require("pdf-parse")
const { analyzeResume } = require("./resumeService")
const Resume = require('./resumeModel')

const uploadResume = async (req, res) => {
    try {

        console.log(pdf)
        const data = await pdf(req.file.buffer);
        // console.log(data.text);.
        const result = await analyzeResume(data.text)
        // console.log(result)

        const cleaned = result.replace(/```json/g, "").replace(/```/g, "").trim();

        const analysis = JSON.parse(cleaned)


        const resume = await Resume.create({
            resumeText: data.text,
            atsScore: analysis.atsScore,
            strengths: analysis.strengths,
            weaknesses: analysis.weaknesses,
            missingSkills: analysis.missingSkills,
        })

        res.json({
            success: true,
            data: resume,
        })


    } catch (error) {
        console.log("Full error : ", error)
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const getLatestResume = async (req, res) => {
    try {
        const resume = await Resume.findOne().sort({
            createdAt: -1
        });

        res.json({
            success: true,
            data: resume
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



module.exports = { uploadResume, getLatestResume }