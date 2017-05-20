var express = require('express')
var app = express()
var temp = 1;

app.get('/setting', function (req, res) {
	if (temp == 0) {
		res.send('hello');
		temp = 1;
	}
	else
	{
	res.send('hello-1');
	}
	
})

app.get('/getting', function (req, res) {
	if (temp == 1) {
		res.send('temp=0');
		temp = 0;
	}
	
})

app.post('/info', function (req, res) {
	{
	if (temp == 0)
		
		res.json({state: '0'});
	else if (temp ==1)
		res.json({state: '1'});
	}
	
})

app.get('/info', function (req, res) {
	{
	if (temp == 0)
		
		res.json({state: '0'});
	else if (temp ==1)
		res.json({state: '1'});
	}
	
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
