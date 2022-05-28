import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BuyerDdComponent } from './buyer-dd/buyer-dd.component';
import { DecentralandListComponent } from './decentraland-list/decentraland-list.component';
import { MetaHomeComponent } from './meta-home/meta-home.component';
import { SellerDdComponent } from './seller-dd/seller-dd.component';
import { ForSaleComponent } from './decentraland-list/for-sale/for-sale.component';
import { SoldComponent } from './decentraland-list/sold/sold.component';
import { DueDiligenceComponent } from './meta-home/due-diligence/due-diligence.component';
import { MetaMarketplaceComponent } from './meta-home/meta-marketplace/meta-marketplace.component';
import { MetaverseComponent } from './meta-home/metaverse/metaverse.component';
import { TweetComponent } from './meta-home/tweet/tweet.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EstateComponent } from './estate/estate.component';
import { EstateListComponent } from './decentraland-list/estate-list/estate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerDdComponent,
    DecentralandListComponent,
    MetaHomeComponent,
    SellerDdComponent,
    ForSaleComponent,
    SoldComponent,
    DueDiligenceComponent,
    MetaMarketplaceComponent,
    MetaverseComponent,
    TweetComponent,
    NavbarComponent,
    EstateComponent,
    EstateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
