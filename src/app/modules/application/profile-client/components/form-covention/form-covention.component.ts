import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'app-form-covention',
  templateUrl: './form-covention.component.html',
  styleUrls: ['./form-covention.component.css']
})
export class FormCoventionComponent implements OnInit {
  imgsrc = "http://localhost:9999/attachments/convention.jpg";
  file = this.imgsrc;
  constructor(public _d: DomSanitizer) { }

  ngOnInit() {
  }
}
