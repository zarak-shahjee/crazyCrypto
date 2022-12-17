import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from "./tables/tables.component";
import {  HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { DataService } from './data.service';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { LoginComponent} from './login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './news/news.component';
import { CardModule, } from 'primeng/card';

@NgModule({
    declarations: [
        AppComponent,
        TablesComponent,
        LoginComponent,
        NewsComponent
    ],
    providers: [DataService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TableModule,
        ProgressSpinnerModule,
        FormsModule,
        OverlayPanelModule,
        ButtonModule,
        BrowserAnimationsModule,
        MenubarModule,
        CardModule
    ]
})
export class AppModule { }
