var express = require('express');
var redis = require("redis");

module.exports = (function () {
  'use strict';
  var api = express.Router();
  var client = redis.createClient(); // defaults to 127.0.0.1:6379
  
  api.get('/listitems',function (req,res){
    client.lrange('listitems','0','-1',function (err,listitems){
      var listArray = listitems.map(function (item){
        return {value:item};
      })
      res.json(listArray);
    });
  });

  api.post('/listitems',function (req,res){
    console.log("hrmph", req.body);
    client.lpush('listitems',req.body.value,function (err,id){
      res.json({value:req.body.value})
    });
  });
  
  return api;
})();
