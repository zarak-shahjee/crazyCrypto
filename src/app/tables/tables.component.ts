import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent   {
  @Input() tab='coins';
  value:any;
  cols=[];
  spinner:boolean=false;
  constructor(private data: DataService){
    this.updateColumns(this.tab)
this.getData(this.tab)
  }
  
  updateColumns(tab){
    if(tab=='coins'){
      this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'rank', header: 'Rank' },
        { field: 'priceUsd', header: 'Price' },
        { field: 'symbol', header: 'Symbol' }
    ];
    }
    if(tab=='markets'){
      this.cols = [
        { field: 'exchangeId', header: 'Market' },
        { field: 'rank', header: 'Rank' },
        { field: 'priceUsd', header: 'Price' },
        { field: 'volumeUsd24Hr', header: 'Volume in 24hrs' },
        { field: 'baseId', header: 'Coin' }
    ];
    }
    if(tab=='rates'){
      this.cols = [
        { field: 'currencySymbol', header: 'Currency Symbol' },
        { field: 'rateUsd', header: 'Price' },
        { field: 'symbol', header: 'Symbol' },
        { field: 'type', header: 'Type' },
    ];
    }
    if(tab=='exchanges'){
      this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'rank', header: 'Price' },
        { field: 'volumeUsd', header: 'Volume' },
        { field: 'exchangeUrl', header: 'URL' },
    ];
    }
  }
  getData(data:any){
    
    this.spinner=true;
    this.data.getData(data).then((data:any)=>{this.value=data;this.spinner=false});

  }
  updateData(data:any){
    console.log(this.data.getData(data));
    this.spinner=true;
    this.data.getData(data).then((data:any)=>{ this.updateColumns(this.tab);this.value=data;this.spinner=false});

  }
}

