var mongoose = require('mongoose');

var simpleSchema = new mongoose.Schema(
    {password: String,
      email: String
    }
  );

mongoose.model('User', simpleSchema, 'user');
