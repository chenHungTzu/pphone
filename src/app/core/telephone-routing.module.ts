
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelephoneComponent } from './components/telephone/telephone.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path : '' , component : TelephoneComponent},
  {path : '**' , component : ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelephoneRoutingModule { }
