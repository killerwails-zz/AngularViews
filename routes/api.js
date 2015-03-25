var express = require('express');
var bodyParser = require('body-parser')

module.exports = (function() {
  'use strict';
  var redis = require("redis"),
    api = express.Router(),
    client = redis.createClient(); // defaults to 127.0.0.1:6379

  api.use(bodyParser.json())

  // api.get('/',function(req,res){
  //   res.json({'key':'value'});
  // });

  api.use(function(req,res,next){
    client.set("string key", "string val", redis.print);
      next();
  });

  api.get('/',function(req,res){
    client.lrange('myList','0','-1',function(err,reply){
      console.log(reply)
        res.json(reply);
    });
  });

  api.post('/',function(req,res){
    console.log("hrmph", req.body);
    client.lpush('myList',req.body.item);
    res.json({"result":"received"});
  });
  
  return api;
})();
