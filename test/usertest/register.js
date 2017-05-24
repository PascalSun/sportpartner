var assert = require('chai').assert;
var expect = require('chai').expect;
var should=require('chai').should();

var app = require('../../app');
var request = require('supertest')(app);
var Account = require('../../app_server/models/account');

describe('Test', function(){
    before(function() {
      Account.register(new Account({username:'test1@test.com',password:"123456"}));
    // runs before all tests in this block
    });
  after(function(){
      Account.remove({username:'test1@test.com'});
    // runs after all tests in this block
  });
  beforeEach(function(){
    // runs before each test in this block
  });
  afterEach(function(){
    // runs after each test in this block
  });

  describe('Login', function() {
  describe('Login feature', function() {
    it('should get login page successfully',function(done){
      request.get('/login')
        .expect(200,function(err,res){
          res.text.should.contain('Login');
          done(err);
        });
    });
  });
});
})
