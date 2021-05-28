import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7ks-Yr14gpH6-xGVm2VFDpjb0ysEAnnQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
