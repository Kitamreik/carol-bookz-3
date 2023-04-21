const mongoose = require('mongoose');
const {Schema} = mongoose;

const authorSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'A first name is required.'],
    minlength:[1,'Minimum length for the first name is 1 characters.']
  },
  lastName: {
    type: String,
    required: [true, 'A last name is required.'],
    minlength:[1,'Minimum length for the last name is 1 characters.']
  },
  birthYear: {
    type: Number,
    required: [true, 'The birth year is required.'],
    // min:[9999, 'You need the full year of birth'],
    // max:[9999, 'You need the full year of birth']
  },
  bio:{
    type: String,
    required: [true, 'A biography is required.'],
    minlength:[10,'Minimum length for the bio is 10 characters.']
  }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;