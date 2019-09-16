import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Users} from '../shared/models/users';

@Component({
  selector: 'app-miolocompasso',
  templateUrl: './miolocompasso.component.html',
  styleUrls: ['./miolocompasso.component.css'],
  providers: [ApiService]
})
export class MiolocompassoComponent implements OnInit, OnDestroy {


  dadosAPI: Users;
  error = '';
  constructor( private api: ApiService) {

  }

  ngOnInit() {
    this.api.getUsuarios().subscribe(  (retorno : Users)  => {
      this.dadosAPI = retorno;
    }, (error) => {
      this.dadosAPI = {};
      this.error = 'Erro na API';
    });
  }
  cadastraUser(): void{
    const ddUsu = {
      "name": "morpheus",
      "job": "leader",
    };
    this.api.postUsuario(ddUsu).subscribe(ret =>{
      console.log('salvo ok');
    })
  }
  ngOnDestroy(): void {
    this.dadosAPI = {
      results:[]
    } ;
  }

}
