import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(total:number): number {
    return total * (1 + 0.065);
  }

}
