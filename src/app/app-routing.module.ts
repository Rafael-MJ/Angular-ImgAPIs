import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiBannerbearComponent } from './api-bannerbear/api-bannerbear.component';
import { ApiTemplateioComponent } from './api-templateio/api-templateio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  { path: 'bannerbear', component: ApiBannerbearComponent },
  { path: 'templateio', component: ApiTemplateioComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}