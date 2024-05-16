const mongoose = require('mongoose');

const contratosSchema = new mongoose.Schema({
    idcontrato: Number,
    nAnuncio: Number,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: String,
    dataCelebracaoContrato: String,
    precoContratual: String,
    prazoExecucao: String,
    NIPC_entidade_comunicante: Number,
    entidade_comunicante: String,
    fundamentacao: String,
});

module.exports = mongoose.model('contratos', contratosSchema);