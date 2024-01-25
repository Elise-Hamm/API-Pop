const express = require('express');
const app = express();
const port = 4748;
const About = require('./serveur.json');

app.use(express.json());

app.get("/api/user",(req, res) => 
    {res.json(About)}
)

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});