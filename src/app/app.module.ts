import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { LocationService } from './location.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7ks-Yr14gpH6-xGVm2VFDpjb0ysEAnnQ'
    }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
