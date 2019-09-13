import { Component, OnInit } from '@angular/core';
import { ProfileClientService } from '../../services/profile-client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-ouverture-compte',
  templateUrl: './form-ouverture-compte.component.html',
  styleUrls: ['./form-ouverture-compte.component.css']
})
export class FormOuvertureCompteComponent implements OnInit {

  form: {
    genre: string,
    prenom: String,
    nom: String,
    situationPro: String,
    dateNaissance: Date,
    lieuNaissance: String,
    nationalité: String,
    pays: String,
    ville: String,
    region: String,
    adresse: String,
    telephone: String,
  }
  photo;
  userId;
  cni;
  facture;
  fileTof
  fileCn
  fileFac
  userData
  constructor(private profileClientService: ProfileClientService,
    private activedRoute: ActivatedRoute) {
    this.form = {
      genre: "",
      prenom: "",
      nom: "",
      situationPro: "",
      dateNaissance: null,
      lieuNaissance: "",
      nationalité: "",
      pays: "",
      ville: "",
      region: "",
      adresse: "",
      telephone: ""
    }
    this.userId = this.activedRoute.snapshot.paramMap.get('userId');

  }


  ngOnInit() {
  }
  chargerPhoto(files) {
    this.photo = files[0];
    console.log("photo", this.photo)
    this.envoyerPhoto();
  }
  chargerCni(files) {
    this.cni = files[0];
    this.envoyerCni();
  }
  chargerFacture(files) {
    this.facture = files[0];
    this.envoyerFacture();
  }
  envoyerPhoto() {
    const filePhoto = new FormData();
    filePhoto.append('photo', this.photo);
    this.profileClientService.envoyerPhoto(filePhoto, this.userId).subscribe((data: any) => {
      this.fileTof = data.response;
      console.log("file", this.fileTof)

    });
  }
  envoyerCni() {
    const fileCni = new FormData();
    fileCni.append('cni', this.cni);
    this.profileClientService.envoyerCni(fileCni, this.userId).subscribe((data: any) => {
      this.fileCn = data.response;
      console.log("file", this.fileCn)

    });
  }
  envoyerFacture() {
    const fileFacture = new FormData();
    fileFacture.append('facture', this.facture);
    this.profileClientService.envoyerFacture(fileFacture, this.userId).subscribe((data: any) => {
      this.fileFac = data.response;
      console.log("file", this.fileFac)

    });
  }
  envoyerForm() {
    console.log("data", this.form)
    this.profileClientService.envoyerForm(this.form, this.userId).subscribe((data: any) => {
      this.userData = data.response;
      console.log("userData", this.userData)

    });
  }
}

