import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenStr'
})
export class ShortenStrPipe implements PipeTransform {

  
  transform(str:string): string {
    const max = 15;
    if(str.length > max)
      return str.slice(0, max) + '...';
    return str;
  }

}
