
let mongoose = require("mongoose");


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

describe('Test', function(){
describe('404',function(){
    // it("Get no exist page",function(done){
    //   request.get('/xxxxx')
    //     .expect(404,function(err,res){
    //       if (err) throw err;
    //       res.text.should.contain('wrong');
    //       done(err);
    //     });
    // });

    let users = {
          "username":"admin@admin.com",
          "password": "admin1"
      };
      //need to fix

    it('Post 404',function(done){
        chai.request(server)
          .post('/login')
          .send(users)
          .end(err,res) => {
          res.should.have.status(200);
          done();
        }


      });
});

});
