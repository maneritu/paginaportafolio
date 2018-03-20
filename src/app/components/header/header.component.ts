import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'encabezado',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor( public _is:InformacionService,
               public router:Router ){

  }
  public buscarProducto(termino:string)
  {
    //console.log(termino);
    this.router.navigate(['buscar', termino]);
  }
}
