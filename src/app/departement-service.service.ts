import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {

  readonly baseUrl = 'http://192.168.33.10:8089/Kaddem/departement'; // Replace with your server URL

  constructor(private http: HttpClient) { }

  getDepartements(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/retrieve-all-departements`);
  }
}
