"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
var Carro_1 = require("./Carro");
/* --- criar carros ---*/
var carroA = new Carro_1.default('Civic', 4);
var carroB = new Carro_1.default('Cruze', 4);
var carroC = new Carro_1.default('Fusca', 2);
/* --- montar lista de carros da concessionaria ---*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av. Paulista', listaDeCarros);
/* --- mostra a lista de carros da concessionaria ---*/
// console.log(concessionaria.mostrarListaDeCarros());
/* --- comprar o carro ---*/
var cliente = new Pessoa_1.default('João', 'Fusca');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
