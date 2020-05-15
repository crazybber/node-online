/*            +---------+   +-----------+   +----------+    +----------+
   request -->|pro parse|-->|logic deal |-->| DB deal  |--> |  result  |--> response
              +---------+   +-----------+   +----------+	+----------+		  
也就是说，服务器会首先分析URL，对URL中的数据进行解析 。（URL中的数据即自定义的数据结构，也是自定义的通信协议。）  
1、对数据进行解析，分析请求的行为类型。
2、根据协议解析结果，进行下一步的逻辑处理。比如注册，登陆，页面跳转，刷新数据。
3、将逻辑处理中的数据处理，请求交互到数据库处理（如果有）。
4、获取到数据处理结果，将结果进一步处理后，返回给客户端。
more：服务器在读取文件时需要有个根目录，并且服务器监听的HTTP端口最好也不要写死在代码里，因此服务器需要是可配置的。 
*/
var fs   = require('fs'),
	path = require('path'),
	url  = require('url'),
	zlib = require('zlib'),
	http = require('http');

var action =require('./actiondef');
	
var MIME = {
/* 	'.css': 'text/css',
    '.js': 'application/javascript',
	'.txt':'text/plain', 
*/
	'.json':'application/json'
}


// main function parse url get the json object;
function getProtocalObject(httpurl,callback){
	var protocalobj;
	console.log('url：%s ,length: %d',httpurl,httpurl.length);		
	prostr = httpurl.replace('/','');
	console.log('prostr: %s ,length: %d',prostr,prostr.length);	

	var buffer = new Buffer(prostr, 'base64');
	
    zlib.unzip(buffer, function(err, outbuffer) {
	if (!err) { 
		console.log('unzip:content'+outbuffer.toString());
		 var jsonPro_obj=JSON.parse(outbuffer.toString());
			console.log(jsonPro_obj);
		 callback(err, jsonPro_obj);
	}else{
		 console.log('unzip:content error');
	}
});
//	console.log('base %s',base);	
//	var tmp = url.parse(httpurl);
//	console.log(tmp);	
//  console.log('pathnames before map:%s',pathnames);
}


//2、根据协议解析结果，进行下一步的逻辑处理。比如注册，登陆，页面跳转，刷新数据。
//parse 
function DispatchAction(action_keylist,json_obj){
	var conditon  = action_keylist[0];
	console.log('i will dispatch msg by ',conditon);
	switch(conditon)
	{
	case action.reg:
	  console.log('new user, register trasition will go.. ',conditon);
	  break;
	case action.login:
	  
	  break;
	default:
	 
	}
		
		
}

	
function main(argv){
	var config = JSON.parse(fs.readFileSync(argv[0],'utf-8')),
	root = config.root||'.',
	port = config.port||80;
	console.log('starting launch Server on Port :%d',port);
	var server=http.createServer(function(request,response){	
		//1、对数据进行解析，分析请求的行为类型。
		//parser client protocol content
		console.log('parsing client request,start....');
		
		getProtocalObject(request.url,function(err, json_obj){
			var keylist =[];
			for(key in json_obj){
				keylist.push(key);
			}				
		console.log(keylist[0],keylist.length);	
		
		DispatchAction(keylist,json_obj);
			
		
		} );	
		
		//2、根据协议解析结果，进行下一步的逻辑处理。比如注册，登陆，页面跳转，刷新数据。
		//console.log('parsing client request, over');
		// console.log('url:%s',urlinfo);
		//validateFiles	
/* 		validateFiles(urlinfo.pathnames,function(err,pathnames){
			console.log('callback here,by validateFiles');
			if(err){
				console.log('error in callback');
				response.writeHead(404);
				response.end(err.message);
			}else{
				response.writeHead(200,{
					'Content-Type': urlinfo.mime
				});
				console.log('i will write data in the next outPutFiles');
				//console.log(data);
				//response.write(data);
				// response.end();			
				outPutFiles(pathnames,response);
				console.log('bye bye');
			}
		} );	 
*/	
	}).listen(port);
	
	process.on('SIGTERM',function(){
		server.close(function(){
			process.exit(0);
		} );
		
	} );
	console.log('launch Server success!! on Port :%d',port);	
}

function outPutFiles(pathnames,writer){
	console.log('pathnames:%s',pathnames);
	(function next(i,len){
	if(i<len){	
		var reader = fs.createReadStream(pathnames[i]);
		reader.pipe(writer,{end:false});
		reader.on('end',function(){
			console.log('%d file ok..',i+1);
			next(i+1,len);
		} );
	} else{
		writer.end();
	}			
	}(0,pathnames.length));
}

main(process.argv.slice(2));
