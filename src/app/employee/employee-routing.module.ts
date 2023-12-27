import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

const routes: Routes = [
  {
    path: 'employee', component: EmployeeComponent, children: [
      { path: ':id', component: EmployeeDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
