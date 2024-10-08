import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card"
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from "@angular/material/icon"
import { MatDialogModule } from "@angular/material/dialog"
import { MatMenuModule } from "@angular/material/menu"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatGridListModule } from '@angular/material/grid-list';
import { OverlayModule } from "@angular/cdk/overlay";
import { MatDatepickerModule } from '@angular/material/datepicker';
@NgModule({
  exports: [
     MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    OverlayModule,
    MatDatepickerModule



  ]
})

export class MaterialModule { }
