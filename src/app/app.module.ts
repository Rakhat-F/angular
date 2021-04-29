import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RanobeComponent } from './ranobe/ranobe.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SignInComponent,
    NewsComponent,
    LoginComponent,
    HomeComponent,
    RanobeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
