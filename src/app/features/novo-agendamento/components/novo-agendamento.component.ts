import { Component, Inject, OnInit } from '@angular/core';
import { DialogData } from '../entities/dialog-data';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResultDialog } from '../entities/result-dialog';
import { Estabelecimento } from 'src/app/core/models/estabelecimento';
import { NovoAgendamentoControllerService } from '../controller/novo-agendamento-controller.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/core/utils/utils.service';
import { ClientesF2Component } from '../../clientes-f2/components/clientes-f2.component';
import { Cliente } from 'src/app/core/models/cliente';

@Component({
  selector: 'app-novo-agendamento',
  templateUrl: './novo-agendamento.component.html',
  styleUrls: ['./novo-agendamento.component.scss'],
})
export class NovoAgendamentoComponent implements OnInit {
  estabelecimentos: Estabelecimento[] = [];
  cliente: Cliente | undefined;
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NovoAgendamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private controller: NovoAgendamentoControllerService,
    private fb: FormBuilder,
    private utils: UtilsService
  ) {
    this.form = this.fb.group({
      estabelecimento_id: ['', [Validators.required]],
      cliente_id: ['', [Validators.required]],
      dia_selecionado: [new Date(), []],
    });
  }

  ngOnInit() {
    this.setSize();

    this.controller.ListarEstabelecimentos(this);
  }

  onNoClick = () => {
    const result = { closed: true, data: {} } as ResultDialog;

    this.dialogRef.close(result);
  };

  setSize() {
    const header = 58;
    const footer = 56;

    const height = window.innerHeight - header - footer;
    const selector = 'app-novo-agendamento [mat-dialog-content]';
    const content = document.querySelector(selector)! as HTMLElement;

    content.style.height = `${height}px`;
    content.style.minHeight = `${height}px`;
  }

  clienteF2() {
    const dialog = this.utils.abrirF2(ClientesF2Component, {});
    dialog.afterClosed().subscribe({
      next: (result) => {},
    });
  }
  limparCliente(inputcliente_id: any) {
    this.cliente = undefined;
    this.form.get('cliente_id')?.setValue('');

    inputcliente_id.focus();
  }
}
