import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
  constructor(private fb: FormBuilder){

  }
  ngOnInit() {
  }
  title = 'Template driven forms';
 
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

//   form = new FormGroup({
//     "firstName": new FormControl("", Validators.required),
//     "password": new FormControl("", Validators.required),
// });

// contactForm = new FormGroup({
//   firstname: new FormControl(),
//   lastname: new FormControl(),
//   email: new FormControl(),
//   gender: new FormControl(),
//   isMarried: new FormControl(),
//   country: new FormControl()
// })
    
form = this.fb.group({
  "firstName": ["", Validators.required],
  "password":[""]
});
  onSubmit(contactForm) {
    console.log(contactForm);
  }
  onSubmit2(){
    console.log(this.form);
  }
}
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }


}
