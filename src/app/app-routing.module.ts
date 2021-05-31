import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'update/:id', component: UpdateComponent }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]  
})
export class AppRoutingModule { }
