import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'update/:id', component: UpdateComponent }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]  
})
export class AppRoutingModule { }
