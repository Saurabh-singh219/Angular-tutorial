import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-bind',
  templateUrl: './child-bind.component.html',
  styleUrls: ['./child-bind.component.css']
})
export class ChildBindComponent implements OnInit {
@Input() inputParent:(param:any) => void ;
  constructor() { }

  ngOnInit() {
  }
  letsCallParent(){
    this.inputParent('hello');
  }
  
  childFunc(variable){
    console.log("child function in childBind file called with variable"+variable);
  }

}
