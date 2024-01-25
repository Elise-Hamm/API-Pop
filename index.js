const express = require('express');
const cors = require('cors');
const app = express();
const port = 4748;
const About = require('./serveur.json');

app.use(cors());

app.get("/api/user",(req, res) => 
    {res.json(About)}
)

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});