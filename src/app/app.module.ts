import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { APP_ROUTES } from './app.routes';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
     RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, APP_ROUTES, PagesModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
