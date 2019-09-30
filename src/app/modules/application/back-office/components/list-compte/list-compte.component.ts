import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BackOfficeService } from '../../services/back-office.service';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})
export class ListCompteComponent implements OnInit {
  @Input()
  usersComptesCreated
  @Input()
  allComptes 
  fileRemoteSrc = `${environment.BASE_API_URL}/attachments/`;
  userCompte
  constructor(private backofficeService: BackOfficeService) { }

  searchText;
  ngOnInit() {
  }
 getCompte(userId){
   this.backofficeService.getCompte(userId)
   .subscribe((data:{status:String;response:{}})=>{
     this.userCompte=data.response
   })
 }

}
