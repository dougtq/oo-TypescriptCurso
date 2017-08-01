import { DaoInterface } from './DaoInterface';
import Carro from './Carro';

export class CarroDao implements DaoInterface {
  nomeTabela: string = 'tb_carro';

  inserir(object: Carro): boolean {
    console.log('logica de insert');
    return true;
  }

  atualizar(object: Carro): boolean {
    console.log('logica de update');
    return true;
  }

  remover(id: number): Carro {
    console.log('logica de remover');
    return new Carro('', 4);
  }

  selecionar(id: number): Carro {
    console.log('logica de select');
    return new Carro('', 4);
  }

  selecionarTodos(): [any] {
    console.log('logica de getAll');
    return [new Carro('', 4)];
  }
}
