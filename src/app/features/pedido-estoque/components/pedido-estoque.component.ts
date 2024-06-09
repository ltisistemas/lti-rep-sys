import { Component, Inject, OnInit } from '@angular/core';
import { DialogData } from '../entities/dialog-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilsService } from 'src/app/core/utils/utils.service';
import { PedidoEstoqueControllerService } from '../controllers/pedido-estoque-controller.service';
import { ResultDialog } from 'src/app/core/models/result-dialog';

@Component({
  selector: 'app-pedido-estoque',
  templateUrl: 'pedido-estoque.component.html',
  styleUrls: ['./pedido-estoque.component.scss'],
})
export class PedidoEstoqueComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PedidoEstoqueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private controller: PedidoEstoqueControllerService,
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

    // this.controller.ListarEstabelecimentos(this);
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
}
