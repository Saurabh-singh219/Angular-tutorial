import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  apiData2: Object;
  apiData: Object;
  subscription: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((data) =>{
    this.apiData=data;
  })
  this.http.get("http://jsonplaceholder.typicode.com/users").toPromise().then((data) =>{
    this.apiData2=data;
  })
  this.asyncPromise().then(data=>{console.log(data)});
  this.subscription = this.asyncObservable().subscribe(data=>{console.log(data);})
  setInterval(() => {
    this.subscription.unsubscribe()
  }, 8000)
  }

  asyncPromise() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve("Hello");
      }, 1000)
    })
}

asyncObservable() {
   return new Observable(observer => {
    setInterval(() => {
      observer.next("Hi");
    }, 1000)
  })
}

}
