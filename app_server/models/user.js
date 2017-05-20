var mongoose = require('mongoose');

var detail = new mongoose.Schema(
    {user_id: String,
      email: String
    }
  );

mongoose.model('Detail', detail, 'detail');
