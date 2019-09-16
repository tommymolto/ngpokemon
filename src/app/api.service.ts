import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private consumoapi: HttpClient) {

  }
  getUsuarios(): Observable<Object>{
    return this.consumoapi.get('https://pokeapi.co/api/v2/pokemon');
  }
  postUsuario(dadosUser){
    return this.consumoapi.post('https://pokeapi.co/api/v2/pokemon', dadosUser);
  }
}
