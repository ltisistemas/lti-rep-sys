import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

import { LayoutModule } from '@angular/cdk/layout';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [
    LayoutModule,
    PortalModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule,
  ],
  exports: [
    LayoutModule,
    PortalModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule,
  ],
  providers: [],
})
export class MaterialModule {}
