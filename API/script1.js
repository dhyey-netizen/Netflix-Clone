const express = require('express');
const fetch = require('node-fetch'); // Correctly using `require`
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const response = await fetch('https://www.omdbapi.com/?apikey=569ec41766msh8eb7b3ad0a35c71p1922c3jsne2ba62ff6646');
    const data = await response.json();
    res.json(data); // Send the response back to the client
  } catch (error) {
    res.status(500).send('Error fetching data from the API');
  }
});

app.listen(3000, () => {
  console.log("The server is running at port 3000");
});
