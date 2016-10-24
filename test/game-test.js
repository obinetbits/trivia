var expect = require('expect');
var app = require('../app/game.js');
//var Game = require('../gameRunner');

describe('App', function(){
    it('should properly run test', function(){
        expect(1).toBe(1);
    });
    
    it('should exist', function(){
        expect(app).toExist;
    });
});
