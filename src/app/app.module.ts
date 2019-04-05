import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ListaComponent } from './lista/lista.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { LoginComponent } from './loginComponent/login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './Service/login.service';
import { AuthGuard } from './authGuard';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatMenu} from '@angular/material';

const appRoutes:Routes=[
  { path: 'login', component: LoginComponent },
  { path: 'registrazione', component: RegisterComponent  },
  { path: 'homepage', component: HomepageComponent , canActivate:[AuthGuard]},
  { path: 'lista', component: ListaComponent , canActivate:[AuthGuard]},
  { path: 'cards', component: CardsComponent , canActivate:[AuthGuard]},
  { path: 'feedback', component: FeedbackComponent , canActivate:[AuthGuard]},
  { path: 'profilo', component: ProfiloComponent , canActivate:[AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterComponent,
    MenuComponent,
    ListaComponent,
    CardsComponent,
    FeedbackComponent,
    ProfiloComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
