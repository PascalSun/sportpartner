var mongoose = require('mongoose');

var detail = new mongoose.Schema(
    { email:  { type: String, index: true },
      sex: String,
      age: Number,
      skill: Number,
      Adress: Array,
      sports: String
    }
  );

module.exports = mongoose.model('Profile', detail, 'profile');
