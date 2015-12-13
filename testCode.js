//TEST CODE
var fs   = require('fs');
var querystring = require('querystring');
var zlib = require('zlib');

var data ='{"reg":{"user":"username","phone":"15088551600"}}';

var trans = JSON.stringify(data);

console.log('out: %s',trans);


var jsonobj= JSON.parse(fs.readFileSync('Define_Format\\DataStructure','utf-8'));

console.log(jsonobj);

console.log('----------------');

for(key in jsonobj){
	console.log(key);
}
console.log(jsonobj);
console.log('----------------');
var action =require('./Docs/actiondef');

console.log(action.reg);


var urlstr = JSON.stringify(jsonobj);

console.log('urlstr:'+urlstr);


var querystr= querystring.stringify(jsonobj);

console.log('querystr:'+querystr);


zlib.deflate(urlstr, function(err, buffer) {
  if (!err) {
    console.log('content:'+buffer.toString('base64'));
  }
});

var buffer = new Buffer('eJyrVipKTVeyqlYqLU4tUrICU3mJualKOkoFGfl5qUAhQ1MDCwtTU0MzAwOgaG5iZg5QsDgxJ6fSITUxNz9PLzk/F6Q8sbgYKAGiyvOLUpRqawEzJR1Y', 'base64');
zlib.unzip(buffer, function(err, buffer) {
  if (!err) {
	  
    console.log('unzip:content'+buffer.toString());
  }
});
/* 
zlib.gzip(urlstr,function(err,data){
	 if (!err) {
    console.log(data.toString());
	console.log('.........................');
	zlib.gunzip(data,function(err,data){
	 if (!err) {
    console.log(data.toString());
	console.log('.........................');
	}
	});

  }
}); 
*/

/* 
console.log('.........................');

zlib.deflate(urlstr,function(err,data){
	 if (!err) {
    console.log(data.toString('base64'));
  }
});
 */

 

