const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema(
    {
        resumeText: String,
        atsScore: Number,
        strengths: [String],
        weaknesses: [String],
        missingSkills: [String]
    },
    { timestamps: true }
)

module.exports = mongoose.model("Resume", resumeSchema);