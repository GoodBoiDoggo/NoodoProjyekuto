

module.exports = function(app){
	
	app.get('/api/:id', function(req, res){
		console.log(req.params.id);
		res.json({firstname: 'John', lastname: 'Doe', ID: req.params.id});
	});
	app.get('/api2',function(req,res) {
		console.log("BOI");
		res.send("");
	});
	app.get('/api3', function(req,res){
		console.log("YO DAWG");
		res.json({firstname: 'Joni', lastname: 'Depth'});
	});
}