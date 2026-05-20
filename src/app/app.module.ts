import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitFormComponent } from './fruit-form/fruit-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FruitListComponent,
    FruitFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
