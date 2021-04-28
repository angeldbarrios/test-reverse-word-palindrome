const request = require('supertest');
const assert = require('chai').assert;
const app = require('../../web-server/app')();

describe('GET /iecho', function() {
  it('should reverse word and say it is not palindrome', function(done) {
    request(app)
      .get('/iecho')
      .query({ text: 'testword' })
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, function(err, res) {
        if (err) return done(err);
        assert.deepEqual(res.body, {
          palindrome: false,
          text: 'drowtset'
        });
        done();
      });
  });

  it('should reverse word and say it is palindrome', function(done) {
    request(app)
      .get('/iecho')
      .query({ text: 'radar' })
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, function(err, res) {
        if (err) return done(err);
        assert.deepEqual(res.body, {
          palindrome: true,
          text: 'radar'
        });
        done();
      });
  });



  it('should reverse word with al least one uppercase letter and say it is palindrome', function(done) {
    request(app)
      .get('/iecho')
      .query({ text: 'Rotator' })
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, function(err, res) {
        if (err) return done(err);
        assert.deepEqual(res.body, {
          palindrome: true,
          text: 'rotatoR'
        });
        done();
      });
  });


  it('should reverse text differents type of chars', function(done) {
    request(app)
      .get('/iecho')
      .query({ text: 'Eva, can I see bees in a cave?' })
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, function(err, res) {
        if (err) return done(err);
        assert.deepEqual(res.body, {
          palindrome: true,
          text: '?evac a ni seeb ees I nac ,avE'
        });
        done();
      });
  });

});