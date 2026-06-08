const ai = require('../../services/geminiServices')

const analyzeResume = async (resumeText) => {
    const prompt = `
    Analyze this resume.

    Return ONLY valid JSON.
    Use EXACTLY these keys:

    {
    "atsScore": 0,
    "strengths": [],
    "weaknesses" : [],
    "missingSkills":[]
    }

    Do not rename keys.
    Do not add extra fields.

    Resume:
    ${resumeText}
    `;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    return response.text;
}

module.exports = {
    analyzeResume,

}