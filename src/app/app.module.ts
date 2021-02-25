import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RedSalsaComponent } from './red-salsa/red-salsa.component';
import { YellowSalsaComponent } from './yellow-salsa/yellow-salsa.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { InfoComponent } from './info/info.component';
import { MailServerComponent } from './mail-server/mail-server.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RedSalsaComponent,
    YellowSalsaComponent,
    AboutComponent,
    ShopComponent,
    InfoComponent,
    MailServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
