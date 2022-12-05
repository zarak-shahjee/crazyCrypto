import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from "./tables/tables.component";
import {  HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { DataService } from './data.service';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
    declarations: [
        AppComponent,
        TablesComponent
    ],
    providers: [DataService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TableModule,
        ProgressSpinnerModule
    ]
})
export class AppModule { }
