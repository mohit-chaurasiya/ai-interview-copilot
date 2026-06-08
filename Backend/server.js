const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const connectDb = require('./config/db')
const ai = require('./src/services/geminiServices')

const resumeRoute = require('./src/modules/resume/resumeRoute')



const app = express()

// connect database
connectDb()

// middleware
app.use(cors())
app.use(express.json())

// test route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "AI Interview Copilot API Running 🚀",
    });
})

app.get('/test-ai', async (req, res) => {
    try {
        // console.log(process.env.GEMINI_API_KEY);
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: "Explain reacs in 50 words in computerr science",
        });

        res.json({
            success: true,
            data: response.text
        })
    } catch (error) {
        console.error("FULL ERROR:", error);
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
})

// resume route
app.use('/api/resume', resumeRoute)



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});