import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaHomeComponent } from './meta-home/meta-home.component';
import {TestPageComponent} from './test-page/test-page.component';

const routes: Routes = [
  {path: 'test', component: TestPageComponent}, 
  {path: '', component: MetaHomeComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
