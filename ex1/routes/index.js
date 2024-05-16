var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contratos')


router.get('/contratos/entidades', function(req, res) {
  Contrato.getEntidadesList()
    .then(registo => {
      res.jsonp(registo)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das entidades"})
    })
});


router.get('/contratos/tipos', function(req, res) {
  Contrato.getTiposList()
    .then(registo => {
      res.jsonp(registo)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção dos tipos"})
    })
});


router.get('/contratos', function(req, res, next) {
  if (req.url.includes("entidade")){
    Contrato.getEntidade(req.query.entidade)
    .then(lista => {
      res.jsonp(lista)
    })
    .catch(erro => {
      console.log("Erro na obtenção da lista com registos desta entidade")
    })
  }
  else if  (req.url.includes("tipo"))
  {
    Contrato.getTipo(req.query.tipo)
    .then(l => {
      res.jsonp(l)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista "})
    })
  }
  else{
  Contrato.list()
    .then(listas => {
      res.jsonp(listas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das lista de contratos"})
    })
  }
});


router.get('/contratos/:id', function(req, res) {
    Contrato.getRegisto(req.params.idcontrato)
      .then(registo => {
        res.jsonp(registo)
      })
      .catch(erro => {
        res.render('error', {error: erro, message: "Erro na obtenção do registo"})
      })
});


router.post('/contratos', function(req, res) {
  Contrato.addRegisto(req.body)
    .then(lista => {
      res.jsonp(lista)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção do registo"})
    })
})


router.delete('/contratos/:id', function(req, res) {

    Contrato.deleteRegisto(req.params.idcontrato)
      .then(dados => {
        res.jsonp(dados)
      })
      .catch(erro => {
        res.render('error', {error: erro, message: "Erro na eliminação de um registo"})
      })
})

module.exports = router;
