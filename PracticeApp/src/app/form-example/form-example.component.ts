import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {
  countryList = [
    {id:"1",name:"India"},
    {id:"2",name:"Australia"},
  ];
  phoneList = [
    {id:"ind",name:"+91"},
    {id:"aus",name:"+42"},
  ];

  showpass1="password";
  showpass2="password";
  formattedAmount: any;
  constructor(private currencyPipe : CurrencyPipe) { }

  ngOnInit() {
  }
  onSubmit(contactForm) {
    console.log(contactForm);
  }
  myFunction1(){
    var x = <HTMLInputElement>document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  }
  myFunction2(){
    var x = <HTMLInputElement>document.getElementById("cPass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  }
  transformAmount(element){
    this.formattedAmount = this.currencyPipe.transform(element.target.value, '$');

    element.target.value = this.formattedAmount;
}
loadFile(event) {
	var image = document.getElementById('output');
	image['src'] = URL.createObjectURL(event.target.files[0]);
};
}
