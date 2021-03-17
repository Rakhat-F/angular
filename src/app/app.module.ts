import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RanobeComponent } from './ranobe/ranobe.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SignInComponent,
    NewsComponent,
    LoginComponent,
    HomeComponent,
    RanobeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
