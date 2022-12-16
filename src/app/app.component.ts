import { Component,ViewChild } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('table') table;
  title = 'crazyCrypto';
  tab ='coins'
  login =true;
  user=null;
  items=[]
  isAuthenticated=false;
  isCollapsed=true;
backgroundc="background-color: rgb(246, 200, 100);";
  constructor(private authService:AuthService){}
  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
  ngOnInit() {
    this.items = [
      {
          label: 'File',
          command: (res) => this.navigate('coins'),
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          
      }
  ]
    this.authService.userSub.subscribe((user) => {
      this.isAuthenticated = user ? true : false;
      this.user=user;
     
    });
  }
  navigate(nav: string){
    console.log(nav);
    this.tab=nav;
    this.table.updateData(nav);
  }
  navigateMainPage(event){
    console.log(event);
    this.login=false;
  }
  logout(){
    this.isAuthenticated=false;
  }
}
