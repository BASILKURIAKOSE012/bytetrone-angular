import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPipes'
})
export class AppPipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
