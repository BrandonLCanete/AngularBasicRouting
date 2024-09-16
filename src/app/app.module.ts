import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import { NgModel } from '@angular/forms';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'landing-page', component: LandingPageComponent},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {enableTracing: true}),
    ], 
    declarations: [
        AppComponent,
        LoginComponent,
        SignUpComponent,
        LandingPageComponent,
    ],
    providers: [
        provideAnimationsAsync(),
    ],
        
    bootstrap: [
        AppComponent
    ],
    exports: [RouterModule],
})

export class AppModule{}
