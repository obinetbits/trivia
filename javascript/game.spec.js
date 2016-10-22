
//Replace math random with seeded method
Math.seed = function(s) {
    return function() {
        s = Math.sin(s) * 10000; return s - Math.floor(s);
    };
};

// usage:
var random1 = Math.seed(1);
var random2 = Math.seed(random1());
Math.random = Math.seed(random2());

//overide console.log
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/tempOutput.txt', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

require('./game.js');
//var assert = require('assert');
//var helper = require('./match-helper.js');
var m = require('./cat.js');

describe("The test environment", function() {
  it("should pass", function() {
    expect(true).toBe(true);
  });

  it("should access game", function() {
    expect(Game).toBeDefined();
  });
});

describe("new output", function() {
  it("sholud match original output", function(){
    waitMiddeware();
  });
});




module.exports.ifugonu = function(){
    return expectWaiter().next
}


          function *expectWait(){ 
            m.helper();              
              yield;
              var match = m.helper();
          //expect(match).toBe(true);
          console.log('hi: ' + match);
           //done();
          
          }
          
var expectWaiter = expectWait();

function waitMiddeware(){
  expectWaiter.next()
}

//var waitMid = waitMiddeware();

