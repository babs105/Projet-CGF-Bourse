import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from './services/back-office.service';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent implements OnInit {
  allUsers;
  allComptes
  
  constructor(private backofficeService: BackOfficeService) {
    this.getUsers();
  }


  ngOnInit() {
  }

  getUsers() {
    this.backofficeService.getUsers().subscribe((data: { status: String; response: [] }) => {
      this.allUsers = data.response;
      console.log("users", this.allUsers);
    });
  }
  getComptes(){
    this.backofficeService.getComptes().subscribe((data: { status: String; response: [] }) => {
      this.allComptes = data.response;
      console.log("allComptes ", this.allComptes );
    });
  }
 
}
