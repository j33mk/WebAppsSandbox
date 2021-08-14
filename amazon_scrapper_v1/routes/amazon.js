var express = require('express');
var router = express.Router();
var config = require('../config/appconfig');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getProduct/:productId',async(req,res,next)=>{
  console.log(config.baseUrl);
  const {productId}=req.params;
    res.send({
        'message':'product is recieved',
        'productId':productId,
        'baseUrl':config.baseUrl,
        'apiKey':config.apiKey
    }).status(200);
});

module.exports = router;
