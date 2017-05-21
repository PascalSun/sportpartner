var mongoose = require('mongoose');

var detail = new mongoose.Schema(
    { email:  { type: String},
      sex: String,
      age: Number,
      skill: Number,
      Adress: {type: [Number], index: '2d'},
      sports: String
    }
  );


module.exports = mongoose.model('Profile', detail, 'profile');
