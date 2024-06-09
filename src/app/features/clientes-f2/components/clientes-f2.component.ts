import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientesF2ControllerService } from '../controllers/clientes-f2-controller.service';

@Component({
  selector: 'app-clientes-f2',
  templateUrl: './clientes-f2.component.html',
  styleUrls: ['./clientes-f2.component.scss'],
})
export class ClientesF2Component implements OnInit {
  form: FormGroup = this.fb.group({ nome: ['', [Validators.required]] });

  constructor(
    public dialogRef: MatDialogRef<ClientesF2Component>,
    private fb: FormBuilder,
    private controller: ClientesF2ControllerService
  ) {}

  ngOnInit() {
    this.controller.listarCLientesF2(this);
  }

  clearForm(input: any) {}

  onNoClick = () => this.dialogRef.close({ isCLosed: false });

  onSelectRow() {}

  onHanddle() {}
}
