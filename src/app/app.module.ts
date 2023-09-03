import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnfantComponent } from './exerciceInput/enfant/enfant.component';
import { ParentComponent } from './exerciceInput/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    EnfantComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
