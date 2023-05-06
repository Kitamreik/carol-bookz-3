//version 6
/*
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if(!err) {
    console.log("Successful connection with MongoDB Server");  
  }
  else {
      console.log("Error with MongoDB's connectivity");
      console.log(err)
  }
});

*/
const mongoose = require('mongoose');



// NEW- VERSION 7
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test')};