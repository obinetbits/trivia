
var fs = require('fs');
var n = require('./game.spec.js');


    function *matchHelper(){
    var tempOutput;
    var originalOutput;
    var match;


    //read first file
    
    fs.readFile("./tempOutput.txt", "utf-8", function(err, data){
    
        if(err){
            console.log(err);
        } else {
            //console.log('data' + data)
            tempOutput = data;
            //console.log('tempOutput' + tempOutput)

            //read 2nd file
            fs.readFile("./originalOutput.txt", "utf-8", function(err, data){
        
                if(err){
                    console.log(err);
                } else {
                    //console.log('data2' + data)
                originalOutput = data;
                //console.log('originalOutput' + originalOutput)
                //setTimeout(function(){},1000);
                
                }

                     if(tempOutput === originalOutput){
                        
                        console.log('files match');
                        this.match = true;
                        //matchWaiter.next();
                        n.ifugonu();
                        //return 'hi';
                        
                    } else {
                        console.log('files do not match');
                        this.match = false;
                       // matchWaiter.next();
                        n.ifugonu();
                        //return false;
                    }
                
                    //return 'result' + this.match;
            });
        }   
});
//console.log('hi');
//setTimeout(function(){return 'hi'},1000);
yield;
//yield 2;
//return 'hi';
//console.log(this.match);
return matchRes(this.match);

//return 'hello';


}

function matchRes(match){
return match;
}

var matchWaiter = matchHelper();

//matchWaiter.next();
//matchWaiter.next();

module.exports.helper = function(){
    return matchWaiter.next().value;
}
//var result = helper.matchHelper();

//console.log('result is:' + result);

//module.exports = helper;
