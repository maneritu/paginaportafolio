import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'encabezado',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor( public _is:InformacionService ){

  }
}
