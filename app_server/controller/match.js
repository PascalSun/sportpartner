var Prefer= require('../models/prefer');
var Profile = require('../models/profile');
var Account = require('../models/account');
/* Get index page of match*/
// will need to use 2D search here
module.exports.index = function(req,res){
  if(req.user){
    Prefer.findOne({email:req.user.username},function(err1,prefer){
      if(err1) throw err1;
      if(prefer){
        var agewant = prefer.age;
        var skillwant = prefer.skill;
        var sex = prefer.sex;
        var sports = prefer.sports;
        Profile.findOne({email:req.user.username},function(err,profile){
          if(err) throw err;
          if(profile){
            var loc = profile.Adress;
            console.log(profile.Adress);
            Profile.aggregate()
              .near(
                {
                  near:loc,
                  distanceField: "dist"
                }
              )
              .project(
                {
                  '_id':1,
                  'email':1,
                  'sex':{$eq:["$sex",sex]},
                  'sports':{$eq:["$sports",sports]},
                  'agediff':{$abs:{$subtract:["$age",agewant]}},
                  'skilldiff':{$abs:{$subtract:["$skill",skillwant]}},
                  'Adress':1,
                  'dist':1
                }
              )
              .project(
                {
                  'diff':{$add:["$skilldiff",{$divide:["$agediff",5]},{$multiply:["$dist",200]}]},
                  '_id':1,
                  'email':1,
                  'sex':1,
                  'agediff':1,
                  'skilldiff':1,
                  'sports':1,
                  'Adress':1,
                  'dist':1
                }
              )
              .sort("diff")
              .exec(function(errs,dis){
                if(errs) throw errs;
                console.log(dis);
                res.send(dis);
              })
          }
          else{
            res.redirect('/users/profile');
          }
        });
      }
      else{
        res.redirect('/users/prefer');
      }
    });
  }
  else{
    res.redirect('/login');
  }
};
