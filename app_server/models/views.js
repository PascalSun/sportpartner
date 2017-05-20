var mongoose = require('mongoose');

var view = new mongoose.Schema(
    { host_id:  { type: String, required: true, index: true, unique: true },
      vistor:{
        visit_id: String,
        visit_time: Date
      }
    }
  );

module.exports = mongoose.model('View', view, 'view');
