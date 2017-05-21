var gpio = require('rpi-gpio');
var http = require("http");
var str = '';
var digitalOutState = true;


function write() {
    gpio.write(7, digitalOutState, function(err) {
        if (err) throw err;
        console.log('Written to pin');
		
    });
}
 

	
	
var options = {
  hostname: '45.55.219.255',
  port: 3000,
  path: '/info',
  method: 'POST',

};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    res.setEncoding('utf8');


    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        str += chunk;

        console.log(str);
    });

    res.on('end', function () 
	{
        console.log('No more data in response.');
        if (JSON.parse(str).state == '1') 
		{
			digitalOutState = true;
			console.log('Written 1 to pin');
			gpio.setup(7, gpio.DIR_OUT, write);
			console.log('finish');
  //  });
        }
		else
		{
			digitalOutState = false;
			console.log('Written 0 to pin');
			gpio.setup(7, gpio.DIR_OUT, write);
		}


        console.log('End:' + JSON.parse(str).state);
    });


});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

console.log('fin');
req.end();