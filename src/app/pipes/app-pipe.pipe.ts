import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPipe'
})
export class AppPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
