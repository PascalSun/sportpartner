# SportPartner
MEAN stack project
- Demo: https://sportspartner.herokuapp.com/
## Deploy
### Heroku
  1. Create a Heroku account: https://www.heroku.com/
  2. Connect it with Github
  3. Deploy it with this repo (you can fork this one first)
  4. Wait for the outcome
  5. Demo: https://sportspartner.herokuapp.com/
### Local Machine
  1. install nodejs and npm :https://nodejs.org/en/download/package-manager/
  2. clone the repo   `git clone https://github.com/PascalSun/sportpartner`
  3. `cd ./sportpartner`
  4. `npm install`
  5. `npm start`
  6. open your web broswer: localhost://3000
### Ubuntu setup
  0. `sudo apt-get update`

      install nvm `curl https://raw.githubusercontent.com/creationix/nvm/v0.16.1/install.sh | sh`
  1. install nodejs: `nvm install 6.10.2`
  2. install npm: `sudo apt-get install npm`
  3. install git: `sudo apt-get install git`
  4. `git clone https://github.com/PascalSun/sportpartner`
  5. `cd ./sportpartner`
  6. `npm install`
  7. `npm start`

## Check Match
  0. login link: https://sportspartner.herokuapp.com/login
  1. login with {username:admin@admin.com,password:admin1}
  2. see match link: https://sportspartner.herokuapp.com/match?map=1

## About the match algorithm


## Functions
- [x] Basic Views
- [x] Set up mongodb
  - [x] local machine
  - [x] mLab (add in the end, with some test data)
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
    - [x] view, client side check
    - [x] server side change the password
  - [x] After register, redirect to login page and keep the username and password info
  - [x] error handle
    - [x] login: how to customize the Unauthorized white page
    - [x] register
- [x] Edit profile
  - [x] view,models,controller,route framework
  - [x] autocomplete address via google api
  - [x] transform address to coordinate, via client side
  - [x] store info to database
  - [x] Decode coordinate to address from server side
  - [x] User stories
    - [x] view profile
    - [x] edit profile
    - [x] when the user login the first time, then redirect to edit page directly
- [x] Edit prefernece
  - [x] models,view,controller,router
  - [x] edit and view preference
- [x] Communication:
  - [x] view basic profile of other user
  - [x] models stored visitor and hosts
  - [x] list who view you and who you have viewed
  - [x] Leave Message
  - [x] See who are contacting with you
  - [x] See who you have contacted
  - [x] If possible, Add email notification: Use mailgun to send email to the user when some leave message for the use
- [ ] Show matches
  - [ ] Location Based Match
    - [x] Match all people, around, and show on the map
    - [x] Match people meet prefer, show as a list
    - [x] and if possible, show on the map
    - [ ] use rest API, and Angular, not need to change prefer data, show the results
  - [x] Graphic Match Visualization

## Pages
  - [x] Instructions about how to launching on a cloud platform
  - [x] user data collection
  - [x] display match
  - [ ] explain match algorithm
  - [ ] describe what architecture used, choices made, difficulities faced
  - [ ] About test / validation Strategy and results
  - [ ] Introduction and references
## To fix
  - [ ] the number value problem
  - [ ] the match problem
  - [ ] add some data in the mlab
## Tests

## Instructions
- how to run
  ```
  npm start
  ```

## Reference
- About connect-flash:
  http://mclspace.com/2015/12/03/nodejs-flash-note/
- Passport.js Document:
  http://passportjs.org/features
- Geo Base query via mongodb:
  https://docs.mongodb.com/manual/core/geospatial-indexes/#GeospatialIndexing-geoNearCommand
- Mongoose Document:
  http://mongoosejs.com/docs/guide.html
- Google Map Api:
  https://developers.google.com/maps/documentation/geocoding/start#header
- Google Map Console:
  https://console.developers.google.com/apis/dashboard?project=sportpartner-1495264627869&duration=PT1H
- Mongoose document:
  https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
- node-geocoder:
  https://github.com/nchaulet/node-geocoder
- node-sendmail:  
  http://javascript.tutorialhorizon.com/2015/07/02/send-email-node-js-express/
- nodemailer:
  https://github.com/nodemailer/nodemailer
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
- The mongoose query callback is really disaster, need to find some solutions.
