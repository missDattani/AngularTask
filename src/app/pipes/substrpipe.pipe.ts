import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substrpipe'
})
export class SubstrpipePipe implements PipeTransform {

  transform(value: string,parameter:number): unknown {
    // return value.substring(0,3);
     return value.substring(0,parameter);

  }

}
