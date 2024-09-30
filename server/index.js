const express = require('express')
require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require('cors')

let app = express()
app.use(express.json())
app.use(cors())

const genAI = new GoogleGenerativeAI(process.env.SECRET);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post('/random-quiz', async(req, res) => {
   let prompt = `
   Generate me a random quiz about cricket. give the output in json format only. it should have following structure:
        {
        quiz:{
        title: ---,
        questions: [
         {
        "question": "",
        "options": [],
        "answer": ""
      }
        ]
        }
        }
   `

   let result = await model.generateContent(prompt)

    res.json(result.response.text())
})

app.listen(8000, () => {
    console.log(`Server running on port 8000`)
})