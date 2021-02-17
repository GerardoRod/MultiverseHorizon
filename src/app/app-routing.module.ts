import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
    {path: 'about', component: AboutComponent },
    {path: '', component: HomeComponent },
    {path: 'navbar', component: NavbarComponent },
    {path: 'contact-us', component: ContactUsComponent },

    {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
