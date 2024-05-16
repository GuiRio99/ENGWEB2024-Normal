var express = require('express');
var router = express.Router();
var data = new Date().toISOString().substring(0,16);
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:16000/contratos")
    .then(response => {
      res.render('index', { contratos: response.data, d: data });
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});

// GET registo
router.get('/:id', function(req, res, next) {
  axios.get("http://localhost:16000/contratos/" + req.params.id)
    .then(response => {
      res.render('registo', { contrato: response.data, d: data });
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});

// GET especie
router.get('/entidades/:id', function(req, res, next) {
  console.log(req.params.id)
  axios.get("http://localhost:16000/contratos?entidades=" + req.params.id)
    .then(response => {
      res.render('entidades', { lista: response.data, d: data });
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});




module.exports = router;
