const contratos = require('../models/contratos');

// Lista de contratos
module.exports.list = () => {
    return contratos
            .find()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getRegisto = id => {
    return contratos.find({"idcontrato":id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getEntidade = e => {
    return contratos.find({"NIPC_entidade_comunicante": e})
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

module.exports.getTipo = e => {
    return contratos.find({"tipoprocedimento": e})
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

module.exports.getEntidadesList = () => {
    return contratos.distinct("entidade_comunicante").sort()
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

module.exports.getTiposList = () => {
    return contratos.distinct("tipoprocedimento").sort()
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

module.exports.addRegisto = c => {
    
    return contratos.find({}, {_id: 1})
        .then(qtd => {
        
            //ordenar
            qtd.sort((a, b) => b._id - a._id);
            
            var next = qtd[0]._id + 1
            
            c._id = next
    
            return contratos.create(c)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
        })
        .catch(erro => {
            return erro
        })
}


module.exports.deleteRegisto = id => {
    return contratos.deleteOne({"idcontrato":id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}