import express from "express";
import {PORT} from './env.js'

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Hello Express js</h1>`)
})
app.get('/about', (req, res) => {
    res.send(` <div id="wrapper">
      <h1>URL Shortner</h1>
      <form action="#" id="shorten-form">
        <label for="url">Enter URL:</label><br />
        <input type="text" name="url" id="url" /> <br />
        <label for="shortCode">Enter ShortCode:</label><br />
        <input type="text" name="shortCode" id="shortCode" /><br />
        <button type="submit">Shorten</button>
      </form>

      <h2>Shortend URLs</h2>
      <ul id="shortend-urls"></ul>
    </div>`)
})
app.get('/contact', (req, res) => {
    res.send(`<h1>No contact Available</h1>`)
})

// const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`)
})


// in powershell use this  $env:PORT=3005; 
// node --watch app.js