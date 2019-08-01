import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListManualComponent } from './list-manual/list-manual.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { FooterComponent } from './footer/footer.component';
import { Mahmodmahmod2019Component } from './mahmodmahmod2019/mahmodmahmod2019.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListManualComponent,
    ListServiceComponent,
    FooterComponent,
    Mahmodmahmod2019Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
