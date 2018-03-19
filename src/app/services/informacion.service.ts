import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {
  info:any = {};
  cargada:boolean = false;
  equipo:any[] = [];
  cargada_nosotros:boolean = false;

  constructor(public http:Http) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info(){
    this.http.get("assets/data/informacion.json")
      .subscribe(
        data => {
          //console.log(data.json());
          this.cargada = true;
          this.info = data.json();

        }
      )
  }

  public carga_sobre_nosotros(){
    this.http.get("https://egresis-1982.firebaseio.com/equipo.json")
      .subscribe(
        data => {
          console.log(data.json());
          this.cargada_nosotros = true;
          this.equipo = data.json();

        }
      )
  }
}
