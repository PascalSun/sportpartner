var mongoose = require('mongoose');

var view = new mongoose.Schema(
    { host_id:  { type: String, required: true,unique: false},
      vistor_id: {type:String, required: true,unique: false},
      visit_time: {type:Date, default: Date.now}
    }
  );

module.exports = mongoose.model('View', view, 'view');
