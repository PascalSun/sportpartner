var assert = require('chai').assert;
var expect = require('chai').expect;
var should=require('chai').should();
var app = require('../app');


describe('Test', function(){
    before(function() {
    // runs before all tests in this block
    });
  after(function(){
    // runs after all tests in this block
  });
  beforeEach(function(){
    // runs before each test in this block
  });
  afterEach(function(){
    // runs after each test in this block
  });

  describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });
});
})
