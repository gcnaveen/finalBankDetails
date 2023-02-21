const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
// const __dirname = path.resolve();

app.use(
  cors({
    origin: '*',
  })
);

var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

const port = 8888;
const { insertToDb } = require('./dbOperations');

app.get('/', (req, res) => {
  // console.log('first route::');
  res.send('first page:::');
});
app.post('/insertDataToDb', jsonParser, async function (req, res) {
  try {
    console.log('req in post::', req.body);
    // console.log('res in post::', res);
    let data = req.body;
    // console.log('Data in post::', data);
    let insertedData = await insertToDb(data);
    // console.log('inserted data:', insertedData);
    res.send({
      message: 'Done',
      data: insertedData,
      status: 200,
    });
  } catch (err) {
    res.send({
      message: 'error adding to db',
      status: 500,
    });
  }
});

app.get('*', function (_req, res) {
  res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

app.listen(port, () => {
  console.log('listening to port 8888');
});
