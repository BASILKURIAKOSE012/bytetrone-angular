
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPipes'
})
export class AppPipesPipe implements PipeTransform {

  transform(value: number): number {
    return value * 2;
  }
}
