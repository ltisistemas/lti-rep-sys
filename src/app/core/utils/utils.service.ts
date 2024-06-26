import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  private _sizes = { width: '', height: '', innerHeight: 0, innerWidth: 0 };

  constructor(private dialog: MatDialog, private snack: MatSnackBar) {}

  setSize() {
    const win = {
      height: window.innerHeight,
      width: window.innerWidth,
    };

    this._sizes.height = `${win.height}px`;
    this._sizes.width = `${win.width}px`;

    this._sizes.innerWidth = win.width;
    this._sizes.innerHeight = win.height;
  }

  abrirF2(component: any, selected?: any) {
    return this.abrirModal({
      component,
      data: selected ?? {},
      width: 0.8,
      height: 0.9,
    });
  }

  abrirModal(options: {
    component: any;
    data: any;
    width?: number;
    height?: number;
    disableClose?: boolean;
    hasBackdrop?: boolean;
  }) {
    const width = options.width
      ? String(this._sizes.innerWidth * options.width).concat('px')
      : this._sizes.width;

    const height = options.height
      ? String(this._sizes.innerHeight * options.height).concat('px')
      : this._sizes.height;

    return this.dialog.open(options.component, {
      width: width,
      minWidth: width,
      maxWidth: width,

      height: height,
      minHeight: height,
      maxHeight: height,

      disableClose: options.disableClose ?? true,
      hasBackdrop: options.hasBackdrop ?? true,
      data: options.data,
    });
  }

  message(message: string, duration = 3500) {
    this.snack.open(message, 'Dispensar', { duration });
  }
}
