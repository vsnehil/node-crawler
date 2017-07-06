var Crawler = require("crawler");
var fs = require('fs');
var fileSave = require('file-save');
var http = require("http");
var all;
http.createServer(function (request, response) {



var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, result, done) {
        if(error){
            console.log(error);
        }else{
            var page = result.body;
            var $ = result.$
            var today_member_name = ($(".today-member-name").text());
            /*var member_name = ($(".member-name").text());
            var price= ($(".price").text());*/
            var test = ($(".event-header").text());
     		test = test.replace(/(\r\n|\n|\r)/gm,"");
     		test = test.trim();
            doThis(test);
            //how to display all var outside the scope of var c?
           //console.log(all);
        }
        done();
    }
});


// Queue just one URL, with default callback
c.queue('https://www.marathonbet.com/en/popular/Tennis/');
function doThis(test){
   all = test;
}

response.end(all);
}).listen(process.env.PORT || 8081);

console.log('Server running at http://127.0.0.1:8081/');
