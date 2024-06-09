import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  // Row Data: The data to be displayed.
  rowData = [
    {
      cliente_id: '1',
      cliente_nome: 'Cliente Avulso 01',
      servico: 'Corte',
      valor: 50,
      status: 'REALIZADO',
      horario: '10:00',
    },
    {
      cliente_id: '2',
      cliente_nome: 'Cliente Avulso 02',
      servico: 'CORTE',
      valor: 50,
      status: 'REALIZADO',
      horario: '11:30',
    },
    {
      cliente_id: '3',
      cliente_nome: 'Cliente Avulso 03',
      servico: 'CORTE',
      valor: 50,
      status: 'PGTO REALIZADO',
      horario: '11:00',
    },
    {
      cliente_id: '4',
      cliente_nome: 'Cliente Avulso 04',
      servico: 'ESCOVA',
      valor: 100,
      status: 'PENDENTE',
      horario: '12:30',
    },
    {
      cliente_id: '5',
      cliente_nome: 'Cliente Avulso 05',
      servico: 'PINTURA',
      valor: 100,
      status: 'CANCELADO',
      horario: '13:30',
    },
    {
      cliente_id: '6',
      cliente_nome: 'Cliente Avulso 06',
      servico: 'SOBRANCELHA DESIGN',
      valor: 150,
      status: 'PENDENTE',
      horario: '14:00',
    },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'cliente_id', headerName: '#' },
    { field: 'cliente_nome', headerName: 'Cliente' },
    { field: 'servico', headerName: 'Serviço' },
    { field: 'valor', headerName: 'valor' },
    { field: 'status', headerName: 'status' },
    { field: 'horario', headerName: 'horario' },
  ];
  constructor() {}

  ngOnInit() {}
}
