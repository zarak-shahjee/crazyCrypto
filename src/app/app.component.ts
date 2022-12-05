import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('table') table;
  title = 'crazyCrypto';
  tab ='coins'
  navigate(nav: string){
    console.log(nav);
    this.tab=nav;
    this.table.updateData(nav);
  }
}
