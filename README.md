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
- [x] Edit profile
  - [x] view,models,controller,route framework
  - [x] autocomplete address via google api
  - [x] transform address to GeoCode, via client side
  - [x] store info to database
  - [x] Decode coordinate to address from server side
  - [x] User stories
    - [x] view profile
    - [x] edit profile
    - [x] when the user login the first time, then redirect to edit page directly
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
- Mongoose document: https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
- node-geocoder: https://github.com/nchaulet/node-geocoder
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
- Javascript function won't wait, they are not the same pace
```
function geocodeAddress() {

  var geocoder = new google.maps.Geocoder();
  var address = document.getElementById('address').value;
  console.log(address);

  geocoder.geocode({'address': address}, function(results, status) {
    console.log(status)

    if (status === 'OK') {
      console.log(results[0].geometry.location.lat());
      console.log(results[0].geometry.location.lng());
      // document.getElementById('addresslat').setAttribute('value',results[0].geometry.location.lat());
      // document.getElementById('addresslng').value = results[0].geometry.location.lng();

      document.getElementById('addresslat').value = results[0].geometry.location.lat();
      document.getElementById('addresslng').value = results[0].geometry.location.lng();
      console.log(document.profile.addresslat.value);
      if(document.profile.addresslat.value!==''){
        document.profile.submit();
        console.log('here');
        return true;
      }
      else{
        return false;
      }
    } else {
      alert('Please ensure your address valid!');
      return false;
    }
  });
  alert('Are you sure to submit?')
  return false; ///  there must be a return false here
  ```
