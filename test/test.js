var request = require('supertest');
var app = require('../index.js');

describe('GET /', function(){
    it('respond with base route', function(done){
        request(app).get('/').expect('Hello, this is the base route.', done);
    });
});

describe('GET /waffles', function(){
    it('respond with waffles resource', function(done){
        request(app).get('/waffles').expect('This route serves the Waffles resource.', done);
    });
});

describe('GET /pancakes', function(){
    it('respond with pancakes resource', function(done){
        request(app).get('/pancakes').expect('This route serves the Pancakes resource.', done);
    });
});

describe('GET /french-toast', function(){
    it('respond with french-toast resource', function(done){
        request(app).get('/french-toast').expect('This route serves the French-Toast resource.', done);
    });
});