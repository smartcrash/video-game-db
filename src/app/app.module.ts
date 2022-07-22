import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StarIconComponent } from './star-icon/star-icon.component';
import { SearchIconComponent } from './search-icon/search-icon.component';
import { GameModalComponent } from './game-modal/game-modal.component';
import { GameCardComponent } from './game-card/game-card.component';
import { StarsComponent } from './stars/stars.component';
import { ModalComponent } from './modal/modal.component';
import { HttpCacheInterceptor } from './interceptors/http-cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    GameCardComponent,
    StarIconComponent,
    SearchIconComponent,
    GameModalComponent,
    StarsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCacheInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
