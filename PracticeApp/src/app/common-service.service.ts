import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  color: string;

  constructor() { }

  setFavColor(color:string){
    this.color=color;
  }
  getFavColor(){
    return this.color;
  }
}
