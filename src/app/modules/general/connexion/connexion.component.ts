import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ConnexionService } from './services/connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  userLogin;
  @ViewChild('btnClose', { static: false })
  btnClose: ElementRef;


  constructor(private connexionService: ConnexionService,
    private router: Router) { }

  ngOnInit() {
  }
  login(login, password) {
    console.log("user trouver", { login, password });
    this.connexionService.loginUser({ login, password })
      .subscribe((data: { status: string, response: {} }) => {
        this.userLogin = data.response;
        if (this.userLogin.login) {
          this.btnClose.nativeElement.click();
          const userId=this.userLogin._id
          console.log("data", this.userLogin.login)
          this.router.navigate(['/profile',userId]);
        }
        console.log("user connecter", this.userLogin);
      });
  }
}
