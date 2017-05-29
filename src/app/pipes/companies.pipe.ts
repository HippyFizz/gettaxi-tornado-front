import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companies_filter'
})
export class CompaniesPipe implements PipeTransform {

  transform(allCompanies: Object[], args?: any): any {
    return allCompanies;
  }

}
