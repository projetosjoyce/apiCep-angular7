import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.css']
})
export class ConsultaCepComponent implements OnInit {

  constructor(private consultaCep: ConsultaCepService) { }

  ngOnInit() {
  }

  consultarCep(valor,form){
    this.consultaCep.buscarCep(valor).subscribe((dados) => this.populaForm(dados,form));
  }

  populaForm(dados,form){
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      localidade: dados.localidade,
      uf: dados.uf
    })
  }


}
