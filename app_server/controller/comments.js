var Comments = require('../models/comments');
var Account = require('../models/account');

module.exports.index = function(req,res){
  if(req.user){
    var host = req.query.username;
    if(host){
      // if the host is not empty
      Account.findOne({username:host},function(err,hosts){
        if (err) throw err;
        // if there is such guy, then check if there is the comments
        if(hosts){
          console.log(hosts);
          var q = Comments.find({$or:[{sender:host,reciever:req.user.username},{sender:req.user.username,reciever:host}]}).sort({created_time:-1});
          q.exec(function(err,comment){
            if(comment[0]){
              console.log(comment);
              res.render('comments',{user:req.user,host:hosts,messages:comment});
            }
            else{
              res.render('comments',{user:req.user,host:hosts});
              // res.send('tocomment');
            }
          });
        }
        else{
          res.send('no such guy')
        }
      });
    }
    else{
      res.send('redirect to all comment page');
    }

  }
  else{
    res.redirect('/login');
  }

}


module.exports.comments = function(req,res){
  if(req.user){
    console.log(req.body.comments);
    console.log(req.body.host_username);


    var host = req.body.host_username;
    var commentbody = req.body.comments;
    if(commentbody){
        // host reply
        var newcomments = new Comments({
            sender_id:req.user._id,
            sender:req.user.username,
            reciever:host,
            commentbody:commentbody
        })

        newcomments.save(function(err){
          if(err) throw err;
          console.log('New Comments');
        });
      res.redirect('/view/comment/'+'?username='+host);
    }
    else{
      res.render('comments',{user:req.user,error:'Comments can not be empty',host:{username:host}});
    }
  }
  // if not login, go to login
  else{
    res.redirect('/login');
  }
}
