import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackOfficeService {

  constructor(private http:HttpClient) {

   }

   getUser(){
    return this.http.get(`${environment.BASE_API_URL}/user`);
   }
}
