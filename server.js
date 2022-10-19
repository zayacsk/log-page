const express = require('express');
const cors = require('cors');
const app = express();
const login = "admin";
const password = 'admin';

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.use('/login', (req, res) => {
  console.log('reqBc', req.body)
  if (req.body.username === login && req.body.password === password) {
    res.send({
      token: 'test123'
    });
  } else {
    res.send({
      error: "мимо"
    });
  }
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));