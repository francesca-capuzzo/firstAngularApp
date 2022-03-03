import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [                                   //path routing tra le pagine --> funziona cambiando nell'http /welcome con /todolist
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},  //welcome sarà la pagina di default ogni volta che viene aperto il sito
  { path: 'welcome', component: WelcomeComponent },
  { path: 'todolist', component: WrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
