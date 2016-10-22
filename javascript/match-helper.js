
var fs = require('fs');


var helper = {
    matchHelper: function (){
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
                        
                        //console.log('files match');
                        this.match = true;
                        return 'hi';
                        
                    } else {
                        //console.log('files do not match');
                        this.match = false;
                        return false;
                    }
                
                    //return 'result' + this.match;
            });
        }   
});
//console.log('hi');
setTimeout(function(){return 'hi'},1000);
//return this.match;


},

matchHelper2: function(){
    
    return this.matchHelper();
}
}

var result = helper.matchHelper();

//console.log('result is:' + result);

//module.exports = helper;
