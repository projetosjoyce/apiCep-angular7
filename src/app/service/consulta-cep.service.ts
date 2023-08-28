import { infoCep } from './../models/info-cep';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConsultaCepService {

constructor(private http: HttpClient) { }

buscarCep(cep: string){
  return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
}

}





