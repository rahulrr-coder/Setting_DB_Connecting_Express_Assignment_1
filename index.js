const express = require('express');
const { resolve } = require('path');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log('MongoDb connected')
    })
    .catch((error)=>{
        console.error('Error connecting to Database')
    })

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
