import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(usersToValidDemande: any, searchText: String): any {
    if(!usersToValidDemande || !searchText){
      return usersToValidDemande;
    }
    searchText= searchText.toLowerCase();
    return usersToValidDemande.filter(it=>
      it.prenom.toLowerCase().includes(searchText));
  }

}
