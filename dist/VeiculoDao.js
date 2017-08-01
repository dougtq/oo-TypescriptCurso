"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo_1 = require("./Veiculo");
var VeiculoDao = (function () {
    function VeiculoDao() {
        this.nomeTabela = 'tb_veiculo';
    }
    VeiculoDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    VeiculoDao.prototype.atualizar = function (object) {
        console.log('logica de update');
        return true;
    };
    VeiculoDao.prototype.remover = function (id) {
        console.log('logica de remover');
        return new Veiculo_1.default();
    };
    VeiculoDao.prototype.selecionar = function (id) {
        console.log('logica de select');
        return new Veiculo_1.default();
    };
    VeiculoDao.prototype.selecionarTodos = function () {
        console.log('logica de getAll');
        return [new Veiculo_1.default()];
    };
    return VeiculoDao;
}());
exports.VeiculoDao = VeiculoDao;
