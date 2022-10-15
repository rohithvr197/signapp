import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http';

import {ReactiveFormsModule,FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginComponent } from './sigin/sigin.component';
import { RegComponent } from './reg/reg.component';
import { RouterModule, Routes } from '@angular/router';
const appRoute:Routes=[
  {path:"",component:SiginComponent},
  {path:"REGISTER",component:RegComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
