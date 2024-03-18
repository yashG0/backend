import express from "express"
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = 5500 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send("<h1>Please login in facebook page</h1>")
})

app.get('/facebook', (req, res) => {
  res.send("<h3> this is facebook page </h3>")
})

app.get('/youtube', (req, res) => {
  res.send("<h3> this is your youtube page </h3>")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})