import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing-main',
  templateUrl: './routing-main.component.html',
  styleUrls: ['./routing-main.component.css']
})
export class RoutingMainComponent implements OnInit {
  inputText: any;

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  childRoutingExample(){
    this.router.navigate(['rou/child'],{state:{data:this.inputText}});
  }
}
