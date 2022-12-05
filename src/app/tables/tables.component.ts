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
  spinner:boolean=false;
  constructor(private data: DataService){
this.getData(this.tab)
  }

  getData(data:any){
    console.log(this.data.getData(data));
    this.spinner=true;
    this.data.getData(data).then((data:any)=>{this.value=data;this.spinner=false});

  }
  updateData(data:any){
    console.log(this.data.getData(data));
    this.spinner=true;
    this.data.getData(data).then((data:any)=>{this.value=data;this.spinner=false});

  }
}
