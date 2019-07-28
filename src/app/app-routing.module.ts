import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';



const routes: Routes = [
  {
    path: 'reactiveForm',
    component: ReactiveFormComponent,
    data: { title: 'Reactive Form' }
  },
  { path: '',
    redirectTo: '/reactiveForm',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
 }
