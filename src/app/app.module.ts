import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AzuiAlertModule,
  AzuiButton,
  AzuiCheckboxComponent,
  AzuiCopyComponent,
  AzuiDividerComponent,
  AzuiErrorComponent,
  AzuiFileUploadModule,
  AzuiIcons,
  AzuiInputModule,
  AzuiInputNumberComponent,
  AzuiMessageComponent,
  AzuiModalComponent,
  AzuiTextareaComponent,
} from 'azuiv2';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AzuiAlertModule,
    AzuiButton,
    AzuiCheckboxComponent,
    AzuiCopyComponent,
    AzuiDividerComponent,
    AzuiErrorComponent,
    AzuiFileUploadModule,
    AzuiIcons,
    AzuiInputModule,
    AzuiInputNumberComponent,
    AzuiMessageComponent,
    AzuiModalComponent,
    AzuiTextareaComponent,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
