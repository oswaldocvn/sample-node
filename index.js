const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));

app.listen(3001, function () {
  console.log('Example app listening on port 8000!')
})
