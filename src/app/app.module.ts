import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiBannerbearComponent } from './api-bannerbear/api-bannerbear.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ApiTemplateioComponent } from './api-templateio/api-templateio.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiBannerbearComponent,
    ApiTemplateioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, NgbModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
