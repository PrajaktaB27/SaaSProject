import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MetaHomeComponent } from './meta-home/meta-home.component';
import { DecentralandListComponent } from './decentraland-list/decentraland-list.component';
import { BuyerDDComponent } from './buyer-dd/buyer-dd.component';
import { SellerDDComponent } from './seller-dd/seller-dd.component';
import { TweetsComponent } from './meta-home/tweets/tweets.component';
import { MetaversesComponent } from './meta-home/metaverses/metaverses.component';
import { MetamarketplaceComponent } from './meta-home/metamarketplace/metamarketplace.component';
import { DuediligenceComponent } from './meta-home/duediligence/duediligence.component';
import { ForsaleComponent } from './decentraland-list/forsale/forsale.component';
import { ForRentComponent } from './decentraland-list/for-rent/for-rent.component';
import { SoldComponent } from './decentraland-list/sold/sold.component';

@NgModule({
  declarations: [
    AppComponent,
    MetaHomeComponent,
    DecentralandListComponent,
    BuyerDDComponent,
    SellerDDComponent,
    TweetsComponent,
    MetaversesComponent,
    MetamarketplaceComponent,
    DuediligenceComponent,
    ForsaleComponent,
    ForRentComponent,
    SoldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
