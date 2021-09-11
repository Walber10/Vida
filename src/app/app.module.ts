import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { AboutV2Component } from './component/about-v2/about-v2.component';
import { BookingComponent } from './component/booking/booking.component';
import { ContactComponent } from './component/contact/contact.component';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { StudioComponent } from './component/studio/studio.component';
import { MoreComponent } from './component/more/more.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';






@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AboutV2Component,
    BookingComponent,
    ContactComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    StudioComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    NgImageSliderModule
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
