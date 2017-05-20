module.exports.index = function(req, res) {
  res.send('respond with a source');
};

module.exports.getprofile = function(req,res){
  res.render('profile',{user:req.user});
};

module.exports.editprofile = function(req,res){
  res.render('profile',{user:req.user});
};

module.exports.storeprofile = function(req,res){
  console.log(req.body);
  console.log(req.user);
  res.send('good');
};
