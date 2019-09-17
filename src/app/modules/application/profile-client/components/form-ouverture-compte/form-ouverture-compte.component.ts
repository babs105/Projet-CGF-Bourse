import { Component, OnInit } from '@angular/core';
import { ProfileClientService } from '../../services/profile-client.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';

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
  fileTof;
  fileCn;
  fileFac;
  userData;
  userLogin;
  filesSrc = `${environment.BASE_API_URL}/attachments/`;
  photoSrc = "";
  cniSrc = "";
  factureSrc = "";
  convention;
  fileConventionResponse;
  conventionSrc = `${environment.BASE_API_URL}/attachments/convention.pdf`;
  showImgInModal = false;
  imgToShow = null;
  constructor(public _d: DomSanitizer, private profileClientService: ProfileClientService,
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
      telephone: "",

    }
    this.userId = this.activedRoute.snapshot.paramMap.get('userId');
    this.profileClientService.getUser(this.userId)
      .subscribe((data: { status: String, response: [] }) => {

        this.userLogin = data.response;
        console.log("user profile", this.userLogin)
        this.initializeForm();

      });
  }

  ngOnInit() {

  }

  initializeForm() {
    this.form = this.userLogin;
    this.photoSrc = this.filesSrc + this.userLogin.photo;
    this.cniSrc = this.filesSrc + this.userLogin.cni;
    this.factureSrc = this.filesSrc + this.userLogin.facture;

  }
  resetForm() {

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

  chargerConvention(files) {
    this.convention = files[0];
    this.envoyerConvention();
  }
  envoyerConvention() {
    const fileConvention = new FormData();
    fileConvention.append('convention', this.convention);
    this.profileClientService.envoyerConvention(fileConvention, this.userId).subscribe((data: any) => {
      this.fileConventionResponse = data.response;

      console.log("fileconvention", this.fileConventionResponse)
    });
  }

  showImg(url) {
    this.imgToShow = url;
    this.showImgInModal = true;
  }
  hideImg(url) {
    this.imgToShow = null;
    this.showImgInModal = false;
  }
}

