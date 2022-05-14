import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';
import { BuyerDdComponent } from './buyer-dd/buyer-dd.component';
import { DecentralandListComponent } from './decentraland-list/decentraland-list.component';
import { MetaHomeComponent } from './meta-home/meta-home.component';
import { SellerDdComponent } from './seller-dd/seller-dd.component';
import { ForRentComponent } from './decentraland-list/for-rent/for-rent.component';
import { ForSaleComponent } from './decentraland-list/for-sale/for-sale.component';
import { SoldComponent } from './decentraland-list/sold/sold.component';
import { DueDiligenceComponent } from './meta-home/due-diligence/due-diligence.component';
import { MetaMarketplaceComponent } from './meta-home/meta-marketplace/meta-marketplace.component';
import { MetaverseComponent } from './meta-home/metaverse/metaverse.component';
import { TweetComponent } from './meta-home/tweet/tweet.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    BuyerDdComponent,
    DecentralandListComponent,
    MetaHomeComponent,
    SellerDdComponent,
    ForRentComponent,
    ForSaleComponent,
    SoldComponent,
    DueDiligenceComponent,
    MetaMarketplaceComponent,
    MetaverseComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
