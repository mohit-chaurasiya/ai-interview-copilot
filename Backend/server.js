const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const connectDb = require('./config/db')

dotenv.config()

const app = express()

// connect database
connectDb()

// middleware
app.use(cors())
app.use(express.json())

// test route
app.get('/', (req,res) => {
    res.json({
    success: true,
    message: "AI Interview Copilot API Running 🚀",
  });
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});