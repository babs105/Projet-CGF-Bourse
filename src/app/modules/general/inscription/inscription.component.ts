import { Component, OnInit } from '@angular/core';
import { InscriptionService } from './services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  userRegister;
  constructor(private inscriptionService: InscriptionService) { }

  ngOnInit() {
  }
  register(login, password) {
    console.log("data", { login, password })
    this.inscriptionService.registerUser({ login, password })
      .subscribe((data: { status: string, response: {} }) => {
        this.userRegister = data.response;
        console.log("user inscrit", this.userRegister);
      });

  }

}
