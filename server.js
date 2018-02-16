const express = require('express')
const app = express()


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/rotten-potatoes', { useMongoClient: true });

app.get('/', (req, res) => {
  res.redirect('https://front-hamster-wheel.herokuapp.com/login')
})
app.get('',(req,res)=>{

})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
