var mongoose = require('mongoose');

var detail = new mongoose.Schema(
    { email: String,
      sex: String,
      age: Number,
      skill: Number,
      Adress: Array,
      sports: String
    }
  );

mongoose.model('Profile', detail, 'profile');
