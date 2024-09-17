import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import { DisplayhelloworldComponent } from './fiftyComponents/displayhelloworld/displayhelloworld.component';

const routes: Routes = [
    {path: 'displayhelloworld', component: DisplayhelloworldComponent},
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
