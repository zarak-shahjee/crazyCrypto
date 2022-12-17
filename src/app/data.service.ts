import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getData(data:string){
    return this.http.get<any>('https://zigzag-principled-cough.glitch.me/'+data).toPromise()
    .then((res:any) =>res.data)
    .then(data => { console.log(data);return data; })
  }
}
