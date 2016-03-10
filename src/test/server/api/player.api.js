process.env.NODE_ENV = 'apitest';

import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';

import server from '../../../server/main';
import Player from '../../../server/api/models/player';

describe('Players', function() {
  Player.collection.drop();

  beforeEach(function(done) {
    var newPlayer = new Player({
      name: 'Johnny Five',
      title: 'Baterka'
    });
    newPlayer.save(function(err, data) {
      if (err)
        console.log('TestDB saving Error: ' + err.message);
      done();
    });
  });
  afterEach(function(done) {
    Player.collection.drop();

    done();
  });

  it('should list ALL players on /api/v1/players GET', function(done) {
    chai.request(server)
      .get('/api/v1/players/')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });

  it('should add a SINGLE player on /api/v1/players POST', function(done) {
    chai.request(server)
      .post('/api/v1/players')
      .send({
        name: 'Čtvrtka',
        title: 'Tentononc',
        userId: 'befelemepeseveze2'
      })
      .end(function(err, res) {
        if (err)
          console.log('POST send Error: ' + err.message);
        res.should.have.status(200);
        res.should.be.json;
        res.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('name');
        res.body.name.should.equal('Čtvrtka');
        done();
      });
  });

  it('should list a SINGLE player on /api/v1/players/<id> GET', function(done) {
    var newPlayer = new Player({
      name: 'Fanosova TS',
      title: 'Vinar'
    });
    newPlayer.save(function(err, data) {
      if (err)
        console.log('TestDB saving Error: ' + err.message);
      chai.request(server)
        .get('/api/v1/players/' + data._id)
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('_id');
          res.body.should.have.property('name');
          res.body.should.have.property('title');
          res.body._id.should.equal('' + data._id);
          res.body.name.should.equal('Fanosova TS');
          res.body.title.should.equal('Vinar');
          done();
        });
    });
  });

  it('should update a SINGLE player on /api/v1/players/<id> PUT', function(done) {
    chai.request(server)
      .get('/api/v1/players/')
      .end(function(err, players) {
        chai.request(server)
          .put('/api/v1/players/' + players.body[0]._id)
          .send({name: 'Nuclear'})
          .end(function(err, res) {
            if (err)
              console.log('Error on PUT players/<id>: ' + err.message);
            res.should.have.status(200);
            res.should.be.json;
            res.should.be.a('object');
            res.body.should.have.property('message');
            done();
          });
      });
  });
  it('should delete a single player on /api/v1/players/<id> DELETE', function(done) {
    chai.request(server)
      .get('/api/v1/players/')
      .end(function(err, players) {
        chai.request(server)
          .delete('/api/v1/players/' + players.body[0]._id)
          .end(function(err, res) {
            if (err)
              console.log('Error on DELETE request: ' + err.message);
            res.should.have.status(200);
            res.should.be.json;
            res.should.be.a('object');
            res.body.should.have.property('message');
            done();
          });
      });
  });
});
