import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-routing',
  templateUrl: './child-routing.component.html',
  styleUrls: ['./child-routing.component.css']
})
export class ChildRoutingComponent implements OnInit {
  product: any;
  dyn:any;

  constructor(private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      this.product=data;
      this.dyn=history.state.data;
  })
  }

}
