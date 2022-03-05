import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PracticeApp';
  currentTab=""
  table=[
    {name:"Pipes",link:'/pip'},
    {name:"Directives",link:'/dir'},
    {name:"Observable",link:'/obs'},
    {name:"Data Tranfer",link:'/dat'},
    {name:"Routing",link:'/rou'},
    {name:"Form",link:'/for'}
  ];

  constructor(private router: Router) {

   }
  ngOnInit(): void {
  }
  openCity(item){
    this.currentTab=item.name;
    this.router.navigate([item.link]);
  }
}
