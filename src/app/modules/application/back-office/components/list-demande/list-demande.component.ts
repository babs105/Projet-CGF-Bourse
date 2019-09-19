import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from '../../services/back-office.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent implements OnInit {

  usersDemande;
  userValidateDoc;
  form: {
    photoArevoir: Boolean,
    factureArevoir: Boolean,
    cniArevoir: Boolean,
    commentaire: String
  }

  fileRemoteSrc = `${environment.BASE_API_URL}/attachments/`;
  constructor(public _d: DomSanitizer, private backofficeService: BackOfficeService) {
    this.form = {
      photoArevoir: false,
      factureArevoir: false,
      cniArevoir: false,
      commentaire: ""

    }
  }
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.backofficeService.getUser().subscribe((data: { status: String; response: [] }) => {
      this.usersDemande = data.response;


      console.log("users", this.usersDemande);


    });
  }
  validerDoc(userId) {
    console.log("userid", userId);
    console.log("usertof", this.form.photoArevoir);
    console.log("usercni", this.form.cniArevoir);
    this.backofficeService.validerDoc(this.form, userId)
      .subscribe((data: { status: string; response: [] }) => {

        this.userValidateDoc = data.response;
        console.log("userValidDoc", this.userValidateDoc)


      });

  }
}
