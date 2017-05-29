import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rides_filter'
})
export class RidesPipe implements PipeTransform {

  transform(allRides: Object[], args?: any): any {
    return allRides;
  }

}
