import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from '../../services/back-office.service';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent implements OnInit {

  userDemande;
  constructor(private backofficeService: BackOfficeService) {
  }
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.backofficeService.getUser().subscribe((data: { status: String; response: [] }) => {
      this.userDemande = data.response
      console.log("user", this.userDemande)
    });
  }



}
