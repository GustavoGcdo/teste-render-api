const express = require('express');
const app = express();


app.get('/', (req, res) => {
  return res.status(200).send({
    message: 'caverna não tem porta'
  })
})


app.listen(process.env.PORT, () => {
  console.log('app listen on port:', process.env.PORT);
})