import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
    {path: 'navBar', component: NavbarComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'navBar'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
