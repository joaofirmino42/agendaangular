import { Injectable } from '@angular/core';
import { CadastroTarefasComponent } from '../cadastro-tarefas/cadastro-tarefas.component';
import { Tarefa } from "../models/tarefa.model";
@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  //criando uma lista(array) de tarefa
  tarefas: Tarefa[] = [
    {
      idTarefa: 1, nome: 'Aula de Angular'
      , data: '2021-10-02', hora: '13:30'
      , descricao: 'Aula de desenvolvimento frontend',
      prioridade: '1'
    },
    {
      idTarefa: 2, nome: 'Aula de .NET'
      , data: '2021-10-03', hora: '08:00'
      , descricao: 'Aula de desenvolvimento Web-MVC',
      prioridade: '2'
    },
    {
      idTarefa: 3
      , nome: 'Aula de Java'
      , data: '2021-09-02', hora: '13:00'
      , descricao: 'Aula de desenvolvimento de APIs',
      prioridade: '3'
    },
    {
      idTarefa: 4
      , nome: 'Aula de Banco de dados'
      , data: '2021-10-08', hora: '43:00'
      , descricao: 'Aula de Modelagem SQL',
      prioridade: '1'
    },
    {
      idTarefa: 5
      , nome: 'Aula de Java Web'
      , data: '2021-10-12', hora: '03:00'
      , descricao: 'Aula de Java Spring MVC',
      prioridade: '2'
    }
  ];
  constructor() {

  }
  //função para gerar um id para a tarefa
  gerarId(): number {
    let id = 0;
    this.tarefas.forEach(function (item) {
      if (id < item.idTarefa) {
        id = item.idTarefa;

      }
    });
    return id + 1; //incremento
  }
  //função para cadastrar uma tarefa
  cadastrar(tarefa: Tarefa): void {
    //adicionando a tarefa na lista...
    this.tarefas.push(tarefa);
  }
  //função para excluir a tarefa
  excluir(tarefa: Tarefa): void {
    //removendo a tarefa da listagem
    this.tarefas.splice(this.tarefas.indexOf(tarefa), 1) //removendo da lista
  }
  //função para atualizar uma tarefa
  atualizar(tarefa: Tarefa): void {
    //procurar a posição na lista onde está a tarefa
    const position = this.tarefas.findIndex(t => t.idTarefa === tarefa.idTarefa);
    //atualizando o registro da tarefa dentro da lista
    this.tarefas[position] = tarefa;
  }
  //buscar 1 tarefa dentro da lista
  obterPorId(id: number): Tarefa {
    //procurar a posição na lista onde está a tarefa
    const position = this.tarefas.findIndex(t => t.idTarefa === id);
    //retornando o registro pela posição
    return this.tarefas[position];
  }
  //função para retornar todas as tarefas cadastradas
  consultar(): Tarefa[] {
    return this.tarefas;

  }
}
