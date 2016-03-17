process.env.NODE_ENV = 'apitest';

import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';

import server from '../../../server/main';
import NotVerified from '../../../server/api/models/notverified';

chai.use(chaiHttp);

describe('Auth', function() {

  it('should authenticate user on /api/v1/auth/login POST', function(done) {
    done();
  });
  it('should add a SINGLE not verified user to notverifieds on /api/v1/auth/login POST', function(done) {
    done();
  });
  it('should add a SINGLE user to users and SINGLE player bound to this user to players on /api/v1/auth/verify GET', function(done) {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send({
        organization: 'Asi Vítr',
        email: 'm@ch.al',
        password: 'machal'
      })
      .end(function(err, notverified) {
        if (err)
          console.log('POST Error to /signup: ' + err);
        else
          chai.request(server)
            .get('/api/v1/auth/verify?id=' + notverified.body._id + '&hash=' + notverified.body.activationhash)
            .end(function(err, res) {
              if (err)
                res.send('Error has occured: ' + err);
              else if (res.error)
                res.send(res.error);
              else if (res.notfound)
                res.send(res.notfound);
              else {
                res.should.have.status(200);
                res.should.be.json;
                res.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('user');
                res.body.should.have.property('player');
                res.body.user.should.equal('m@ch.al');
                res.body.player.should.equal('Asi Vítr');
              }
              done();
            });
      });
  });
  // it('should add a SINGLE lpw request to lostpasswords on /api/v1/auth/lprecover POST', function(done) {
  //   this.timeout(5000);
  //   chai.request(server)
  //     .post('/api/v1/auth/lprecover')
  //     .send({
  //       email: 'r.parkund@ghoststruggle.com'
  //     })
  //     .end(function(err, res) {
  //       if (err)
  //         res.send(err);
  //       else {
  //         res.should.have.status(200);
  //         res.should.be.json;
  //         res.body.should.have.property('message');
  //         res.body.should.have.property('email');
  //         res.body.email.should.equal('r.parkund@ghoststruggle.com');
  //         setTimeout(done, 5000);
  //       }
  //     });
  // });
  // it('should change password of a ONE record in users on /api/v1/auth/reauthentication POST', function(done) {
  //     chai.request(server)
  //       .post('/api/v1/auth/lprecover')
  //       .send({
  //         email: 'r.parkund@ghoststruggle.com', // shouldn't it be just password??
  //         password: 'barnacle'
  //       })
  //       .end(function(err, res) {
  //         if (err)
  //           res.send(err);
  //         else {
  //           res.should.have.status(200);
  //           res.should.be.json;
  //           console.log();
  //           res.body.should.have.property('message');
  //           res.body.should.have.property('user');
  //           res.body.should.have.property('pwchanged');
  //           res.body.user.should.equal('r.parkund@ghoststruggle.com');
  //           res.body.pwchanged.should.equal(true);
  //           done();
  //         }
  //       });
  // });
});
