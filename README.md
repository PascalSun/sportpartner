# sportpartner
MEAN stack project

## Functions
- [x] Basic Views
- [ ] Set up mongodb
  - [x] local machine
  - [ ] mLab (add in the end, with some test data)
- [x] Register Functions
  - [x] Register/Login with passport
  - [x] Validate Password
    - [x] client side
    - [x] server side
      - [x] the same
      - [x] not empty
  - [x] Validate email format
    - [x] not empty
    - [x] already token
  - [x] Change Password
    - [x] view/client side check
    - [x] server side change the password
  - [x] After register, redirect to login page and keep the username and password info
  - [x] error handle
    - [x] login: how to customize the Unauthorized white page
    - [x] register
- [ ] Edit profile
  - [ ] view,models,controller,route framework
  - [ ] autocomplete address
  - [ ] transform addres to GeoCode
- [ ] Edit prefernece
- [ ] Show matches
  - [ ] Location Based Match
  - [ ] Graphic Match Visualization
- [ ] Communication: Leave Message
- [ ] Add Functions
  - [ ] Match Online Status
  - [ ] RealTime Chat

## Tests

## Instructions
- how to run
  ```
  npm start
  ```

## Reference
- About connect-flash: http://mclspace.com/2015/12/03/nodejs-flash-note/
- Passport.js Document: http://passportjs.org/features
- Geo Base query via mongodb: https://docs.mongodb.com/manual/core/geospatial-indexes/#GeospatialIndexing-geoNearCommand
- Mongoose Document: http://mongoosejs.com/docs/guide.html
- Google Map Api: https://developers.google.com/maps/documentation/geocoding/start#header
- Google Map Console: https://console.developers.google.com/apis/dashboard?project=sportpartner-1495264627869&duration=PT1H
## Some Notes
- basic login function vs customize error login
  ```
  // Post to login
  // router.post('/login', passport.authenticate('local', { failureFlash: 'Invalid username or password.' }), function(req,res) {
  //   console.log(res);
  //   res.render('index',{username:req.body.username,user:req.user});
  // });
  ```
  ```
  // Post to login: need to deal with error information
  router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { console.log('1');res.render('login',{message:"Username or Password Wrong"});  }
      if (!user) { console.log('2');res.render('login',{message:info.message}); }
      req.logIn(user, function(err) {
          if (err) {
          res.render('login',{message:'Username and Password not match'});
          }
          res.render('index',{username:req.body.username,user:user});
      });
    })(req, res,next);

  });
  ```
  - the **logIn** function is very important to keep alive

- Sometimes, we need to define the passport Strategy by our self
  ```
  // passport.use(new LocalStrategy(
  //   function(username, password, done) {
  //     /* see done being invoked with different paramters
  //        according to different situations */
  //     Account.findOne({ username: username }, function (err, user) {
  //       if (err) { console.log('wrong'); return done(err); }
  //       if (!user) { console.log('now user'); return done(null, false); }
  //       // if (!user.verifyPassword(password)) {  console.log('now xx'); return done(null, false); }
  //       return done(null, user);
  //     });
  //   }
  // ));
  ```
