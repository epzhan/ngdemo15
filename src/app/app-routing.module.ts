import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'employee', redirectTo:'/employee', pathMatch: 'full' },
  //{ path: 'employee/:id', redirectTo: '/employee/:id', pathMatch: 'full' },
  { path: 'about', redirectTo: '/about', pathMatch: 'full' },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
