const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
//   if(!err) {
//     console.log("Successful connection with MongoDB Server");  
//   }
//   else {
//       console.log("Error with MongoDB's connectivity");
//       console.log(err)
//   }
// });

// NEW- VERSION 7
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL)};