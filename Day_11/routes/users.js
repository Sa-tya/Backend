var express = require('express');
var router = express.Router();
const Pool = require('pg').Pool;

const pool = new Pool({
  user:'postgres',
  host:"localhost",
  database:'postgres',
  password:'postgres',
  port:5432
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM "Users"',(err,result)=>{
    if(err) throw(err);
    // console.log(result,'h1')
    res.json(result);
  })
  // res.send('respond with a resource');
});

module.exports = router;
