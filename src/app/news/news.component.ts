import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getData('news').then((data:any)=>{
      console.log(data)
      this.news=data;});
  }
  news=[]
}
