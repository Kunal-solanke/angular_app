import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HiComponent } from './hi/hi.component';
import { HelloComponent } from './hello/hello.component';
import { PowerService } from './power.service';


@NgModule({
  declarations: [
    AppComponent,
    HiComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PowerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
