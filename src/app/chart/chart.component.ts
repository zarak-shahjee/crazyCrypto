import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private dataService:DataService) { }

  basicOptions = {
    legend: {
        labels: {
            fontColor: '#495057'
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                fontColor: '#495057'
            }
        }],
        yAxes: [{
            ticks: {
                fontColor: '#495057'
            }
        }]
    }
  };

  labels=[];
  data=[];
  basicData={};
  ids=[];
  selectedId:any;
  ngOnInit(): void {
    
   this.dataService.getIds().subscribe((res:any)=>{
    console.log(res)
    this.ids=res;
   })
  }

  updateChart(id){
    console.log(id)
    this.labels=[];
    this.data=[];
    this.dataService.getChartData(id).subscribe((res)=>{
      console.log(res['prices']);
      res['prices'].forEach(element => {
        this.labels.push(new Date(element[0]).toLocaleDateString("en-US"));
        this.data.push(element[1]);
      });
      this.basicData = {
        labels: this.labels,
        datasets: [
            {
                label: id['id'],
                data: this.data,
                fill: false,
                borderColor: '#42A5F5'
            }
           
        ]
      }
    })
  }
}
