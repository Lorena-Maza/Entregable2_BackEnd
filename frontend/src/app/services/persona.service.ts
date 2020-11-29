import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private URL = 'http://localhost:8000/adminapp';
  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get<any>(this.URL + '/persona');
  }

}
