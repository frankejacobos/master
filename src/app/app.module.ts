import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AzuiAlertModule, AzuiButton } from 'azuiv2';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AzuiButton,
    AzuiAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
