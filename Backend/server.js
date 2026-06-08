const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const connectDb = require('./config/db')
const ai = require('./services/geminiServices')



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
            contents: "Explain react in 50 words",
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



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});