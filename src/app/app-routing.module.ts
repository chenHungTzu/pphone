import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'telephone', loadChildren: './core/telephone.module#TelephoneModule' },
  { path: '', component : AppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
