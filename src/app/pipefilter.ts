import { Pipe, PipeTransform } from '@angular/core';  
  
@Pipe({  
    name: 'myfilter',  
    pure: false  
})  
  
export class MyFilterPipe implements PipeTransform {  
    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
          return it.toLowerCase().includes(searchText);
        });
       }


    //transform(items: any[], filter: any): any {  
    //    if (!items || !filter) {  
    //        return items;  
    //    }  
    //    return items.filter(item => item.name.indexOf(filter.name) !== -1);  
    //}  
}  