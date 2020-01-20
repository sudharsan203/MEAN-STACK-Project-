import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  searchText: string;
 
  transform(items: any[], searchText: string, fieldName: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return []; }

    // convert the searchText to lower case
    searchText = searchText.toLowerCase();

    // return the filtered array
    return items.filter(item => {
      if (item && item[fieldName]) {
        return (item[fieldName].toLowerCase().indexOf(searchText.toLowerCase()) > -1 );
 
      }
      return false;
    });
  }

}
