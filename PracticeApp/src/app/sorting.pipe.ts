import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: any, type:string, ...args: any[]): any {
    if(type==="number"){
    return value.sort(function(a, b){return a - b});
    }
    else{
    return value.sort();
    }
  }

}
