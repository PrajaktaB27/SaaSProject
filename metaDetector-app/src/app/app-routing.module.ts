import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaHomeComponent } from './meta-home/meta-home.component';
import { DecentralandListComponent } from './decentraland-list/decentraland-list.component';
import { SellerDdComponent } from './seller-dd/seller-dd.component';
import { BuyerDdComponent } from './buyer-dd/buyer-dd.component';
import { EstateComponent } from './estate/estate.component';

const routes: Routes = [
  {path: '', component: MetaHomeComponent}, 
  {path: 'decentraland', component: DecentralandListComponent}, 
  {path: 'decentraland/estate/:estateId', component: EstateComponent}, 
  {path: 'sellerDD', component: SellerDdComponent}, 
  {path: 'buyerDD', component: BuyerDdComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
