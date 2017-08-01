import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';
import Carro from './Carro';

/* --- criar carros ---*/
let carroA = new Carro('Civic', 4);
let carroB = new Carro('Cruze', 4);
let carroC = new Carro('Fusca', 2);

/* --- montar lista de carros da concessionaria ---*/
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros);

/* --- mostra a lista de carros da concessionaria ---*/
// console.log(concessionaria.mostrarListaDeCarros());

/* --- comprar o carro ---*/
let cliente = new Pessoa('João', 'Fusca');
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
  if (carro['modelo'] === cliente.dizerCarroPreferido()) {
    //comprar o carro
    cliente.comprarCarro(carro);
  }
});
console.log(cliente.dizerCarroQueTem());
