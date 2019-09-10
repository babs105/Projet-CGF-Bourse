import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // user: {}
  // user2: {}
  // show = false;
  constructor(
    // private inscriptionService: InscriptionService, private route: Router
  ) { }

  ngOnInit() {
  }
  // register(email, password) {

  //   console.log("User:", { email, password });
  //   this.inscriptionService.registerUser({ email, password }).subscribe((data: any) => {
  //     this.user = data.response;
  //     console.log("Userrrr", this.user)

  //   })

  // }
  // login(log, pwd) {
  //   console.log("Userlog", { log, pwd });
  //   this.inscriptionService.loginUser({ log, pwd }).subscribe((data: any) => {
  //     this.user2 = data.response;
  //     console.log("Userlog", this.user2);

  //   })
  //  this.show=true
  //   this.route.navigate(['/inscription']);
  // }
}
