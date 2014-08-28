var request = require('request'),
	express = require('express'),
	template = require('consolidate'),
	app = express();


app.engine('html', template.ejs);

app.use(express.static(__dirname + '/app'));

app.get('/provinces', function (rq, rs) {
	var headers = { 'Accepts': 'application/json'}
	var options = { url: 'http://data.developers.do/api/v1/provincias.json', headers: headers, method: 'get'};
	request(options, function (err, res, body) {
		
		return rs.json(JSON.parse(body));
	});
});

app.listen(8080);