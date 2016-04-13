process.env.NODE_ENV = 'apitest';

import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';

import server from '../../../server/main';
import Player from '../../../server/api/models/player';

chai.use(chaiHttp);

describe('Players', function() {
  Player.collection.drop();

  // TODO: api completely changed, player controller listens only for put and so
  // I need to send it full fledged player not just some stub

  // beforeEach(function(done) {
  //   var newPlayer = new Player({
  //     name: 'Johnny Five',
  //     userId: 'fskjalsalipwpw4'
  //   });
  //   newPlayer.save(function(err, data) {
  //     if (err)
  //       console.log('TestDB saving Error: ' + err.message); // eslint-disable-line no-console
  //     done();
  //   });
  // });
  // afterEach(function(done) {
  //   Player.collection.drop();
  //   done();
  // });

  // it('should list ALL players on /api/v1/players GET', function(done) {
  //   chai.request(server)
  //     .get('/api/v1/players/')
  //     .end(function(err, res) {
  //       if (err)
  //         res.send(err);
  //       res.should.have.status(200);
  //       done();
  //     });
  // });
  // 
  // it('should add a SINGLE player on /api/v1/players POST', function(done) {
  //   chai.request(server)
  //     .post('/api/v1/players/')
  //     .send({
  //       name: 'Čtvrtka',
  //       userId: 'befelemepeseveze2'
  //     })
  //     .end(function(err, res) {
  //       if (err)
  //         res.send('POST send Error: ' + err.message);
  //       res.should.have.status(200);
  //       res.should.be.json;
  //       res.should.be.a('object');
  //       res.body.should.have.property('message');
  //       res.body.should.have.property('name');
  //       res.body.name.should.equal('Čtvrtka');
  //       done();
  //     });
  // });

  // it('should list a SINGLE player on /api/v1/players/<id> GET', function(done) {
  //   var newPlayer = new Player({
  //     name: 'Fanosova TS',
  //     title: 'Vinar'
  //   });
  //   newPlayer.save(function(err, data) {
  //     if (err)
  //       console.log('TestDB saving Error: ' + err.message); // eslint-disable-line no-console
  //     chai.request(server)
  //       .get('/api/v1/players/' + data._id)
  //       .end(function(err, res) {
  //         if (err)
  //           res.send(err);
  //         res.should.have.status(200);
  //         res.should.be.json;
  //         res.body.should.be.a('object');
  //         res.body.should.have.property('_id');
  //         res.body.should.have.property('name');
  //         res.body.should.have.property('title');
  //         res.body._id.should.equal('' + data._id);
  //         res.body.name.should.equal('Fanosova TS');
  //         res.body.title.should.equal('Vinar');
  //         done();
  //       });
  //   });
  // });

  it('should update a SINGLE player on /api/v1/players/<id> PUT', function(done) {
    chai.request(server)
      .get('/api/v1/players/') // no longer works!!!
      .end(function(err, players) {
        if (err)
          console.log('PUT request error: ' + err.message); // eslint-disable-line no-console
        chai.request(server)
          .put('/api/v1/players/' + players.body[0]._id)
          .send({name: 'Nuclear'})
          .end(function(err, res) {
            if (err)
              res.send('Error on PUT players/<id>: ' + err.message);
            res.should.have.status(200);
            res.should.be.json;
            res.should.be.a('object');
            res.body.should.have.property('message');
            done();
          });
      });
  });
  // it('should delete a single player on /api/v1/players/<id> DELETE', function(done) {
  //   chai.request(server)
  //     .get('/api/v1/players/')
  //     .end(function(err, players) {
  //       if (err)
  //         console.log('DELETE request error: ' + err.message); // eslint-disable-line no-console
  //       chai.request(server)
  //         .delete('/api/v1/players/' + players.body[0]._id)
  //         .end(function(err, res) {
  //           if (err)
  //             res.send('Error on DELETE request: ' + err.message);
  //           res.should.have.status(200);
  //           res.should.be.json;
  //           res.should.be.a('object');
  //           res.body.should.have.property('message');
  //           done();
  //         });
  //     });
  // });
});
