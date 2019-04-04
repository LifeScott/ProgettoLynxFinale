import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
import { ListaComponent } from './lista/lista.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { EsciComponent } from './esci/esci.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes:Routes=[
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'lista', component: ListaComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'profilo', component: ProfiloComponent},
  { path: 'esci', component: EsciComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    LoginComponent,
    ListaComponent,
    CardsComponent,
    FeedbackComponent,
    ProfiloComponent,
    EsciComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
