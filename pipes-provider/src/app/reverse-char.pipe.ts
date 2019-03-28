import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseChar'
})
export class ReverseCharPipe implements PipeTransform {

  transform(value: string): string {
    let newString = '';
    for (let i = value.length - 1; i >= 0; i--) {
      newString += value.charAt(i);
    }
    return newString;
  }

}