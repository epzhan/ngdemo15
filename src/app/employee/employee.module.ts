import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [EmployeeComponent, EmployeeDetailComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    EmployeeComponent
  ]
})
export class EmployeeModule { }
