import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  @ViewChild('childApp', {static: true}) childAppVariable;
  ngOnInit() {
    this.childAppVariable.childFunc();
  }
  funcBindedVariable = (param:any)=>{this.parentFunc(param)};

  parentFunc(variable){
    console.log("parent function in parent file called with variable"+variable);
  }

}
