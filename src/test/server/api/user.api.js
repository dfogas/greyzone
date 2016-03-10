process.env.NODE_ENV = 'apitest';

import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';

import server from '../../../server/main';
import config from '../../../server/config';
import User from '../../../server/api/models/user';

const should = chai.should();
chai.use(chaiHttp);

console.log('Process env is: ' + process.env.NODE_ENV);
/*
  General note
*/
describe('Users', function() {
  User.collection.drop();

  beforeEach(function(done) {
    var newUser = new User({
      // username because we don't go through controller that changes email to username
      username: 'baterka@johnny.com',
      password: 'duraCe1'
    });
    newUser.save(function(err, data) {
      if (err)
        console.log('TestDB saving Error: ' + err.message);
      done();
    });
  });
  afterEach(function(done) {
    User.collection.drop();

    done();
  });

  it('should list ALL users on /api/v1/users GET', function(done) {
    chai.request(server)
      .get('/api/v1/users')
      .end(function(err, res) {
        if (err)
          console.log(err.message);
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });

  it('should respond with message on auth/signup POST', function(done) {
    chai.request(server)
      .post('/api/v1/auth/signup')
      // here we go through controller so email is in order
      .send({email: 'f.pincasek@seznam.cz', password: 'Fan0U5'})
      .end(function(err, res) {
        if (err)
          console.log('POST send Error: ' + err.message);
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
  it('should list a SINGLE user on /api/v1/user/<id>', function(done) {
    var newUser = new User({
      // again accessing database directly, so we use username as key
      username: 'ctvrtnicek.p@soda.cz',
      password: 'alles_gute'
    });
    // console.log(newUser.save);
    newUser.save(function(err, data) {
      if (err)
        console.log('TestDB saving Error: ' + err.message);
      chai.request(server)
        .get('/api/v1/users/' + data._id)
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('_id');
          res.body.should.have.property('username');
          res.body.username.should.equal('ctvrtnicek.p@soda.cz');
          res.body._id.should.equal('' + data._id);
          done();
        });
    });
  });
});
