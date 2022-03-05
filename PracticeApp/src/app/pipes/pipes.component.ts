import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor(private service:CommonServiceService) { }

  angularPipeFlag=false;
customPipeFlag=false;
  ngOnInit() {
    this.service.setFavColor('blue');
  }
  inputText:String;
  inputNum=[11,2,24,99,45,87,8,7,55,43];
  inputStr=['Golu','Molu','Lolu'];

}
