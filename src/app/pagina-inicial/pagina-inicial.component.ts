import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {
  //atributo para armazenar os dados do gráfico...

  grafico: Chart = new Chart();
  constructor() { }

  ngOnInit(): void {
    //montando o grafico...
    var dados: any[] = [{
      name: 'Prioridade baixa', y: 6, color: '#5CB85C'
    },
    {
      name: 'Prioridade media', y: 4, color: '#F0AD4E'
    },
    {
      name: 'Prioridade alta', y: 8, color: '#D9534F'
    }];
    var nomes: any[] = [
      ['PRIORIDADE BAIXA'], ['PRIORIDADE MÉDIA'], ['PRIORIDADE ALTA']
    ]
    this.grafico = new Chart({
      chart: { type: 'column' },
      title: { text: 'Quantidade de tarefas por prioridade' },
      xAxis: { categories: nomes },
      yAxis: { title: { text: 'Quantidade de tarefas por prioridade' } },
      legend: { enabled: false },
      credits: { enabled: false },
      series: [{ data: dados, type: undefined as any }]
    });
  }

}
