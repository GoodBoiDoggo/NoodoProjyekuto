/**
 * http://usejsdoc.org/
 */
var Todos = require('../models/todoModel');

var mongoose = require('mongoose');

module.exports = function(app){
	
	app.get('/api/all', function(req,res){
		Todos.find(function(err,results){
			res.send(results);
		})
		
	})
	
	app.get('/api/:id', function(req,res){
		Todos.find({_id: req.params.id},
				function(err,results){
					res.send(results);
		
		})
	})
	
	app.get('/testboi', function (req,res){
		res.send("BOIBOIBOIBOIBOIBOIB");
		console.log("BOIIIIIIIIIIIIIIIIIIII");
	})
	
	
	
}