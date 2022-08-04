import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {MatNativeDateModule} from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
//import {MatTableExporterModule} from 'mat-table-exporter';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
 
@NgModule({
  declarations: [],
   imports: [
    CommonModule,
   ],
   exports: [
      MatButtonModule,
      MatBadgeModule,
      MatCardModule,
      MatChipsModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatFormFieldModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatPaginatorModule,
      MatSortModule,
      MatRadioModule,
      MatSelectModule,
      MatSidenavModule,
     MatCheckboxModule,
      //MatTableExporterModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTableModule,
      MatTabsModule,
      MatProgressSpinnerModule,
   ],
   providers: [
      MatDatepickerModule,
   ]
})
 
export class AngularMaterialModule { }