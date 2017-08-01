"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var CarroDao = (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('logica de update');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('logica de remover');
        return new Carro_1.default('', 4);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('logica de select');
        return new Carro_1.default('', 4);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('logica de getAll');
        return [new Carro_1.default('', 4)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
