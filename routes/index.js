var express = require('express'),
  http = require('http');

exports.message = function(req,res) {
	res.send('Hooray!!!');
};

exports.login = function(req, res) {
  var username = req.body.user;
  var password = req.body.pass;
  console.log('user: '+username);
  console.log('password: '+password);
  if((username === 'Anthem') && (password === 'DGVLWP1S'))
    res.send({ result: rows});
};
