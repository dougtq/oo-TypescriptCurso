// import { MotoDao } from './MotoDao';
// import { CarroDao } from './CarroDao';
// import { VeiculoDao } from './VeiculoDao';
// import { PessoaDao } from './PessoaDao';
// import { ConcessionariaDao } from './ConcessionariaDao';
import { Dao } from './Dao';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';
import Veiculo from './Veiculo';
import Carro from './Carro';
import Moto from './Moto';



// let dao: ConcessionariaDao = new ConcessionariaDao();
// let dao2: PessoaDao = new PessoaDao();
// let dao3: VeiculoDao = new VeiculoDao();
// let dao4: CarroDao = new CarroDao();
// let dao5: MotoDao = new MotoDao();



let concessionaria = new Concessionaria('', []);
let pessoa: Pessoa = new Pessoa('', '');
let veiculo: Veiculo = new Veiculo();
let carro: Carro = new Carro('', 4);
let moto: Moto = new Moto();

let dao: Dao<Concessionaria> = new Dao<Concessionaria>();
dao.inserir(concessionaria);
