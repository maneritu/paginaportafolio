import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styles: []
})
export class NosotrosComponent{
  constructor( public _is:InformacionService ){

  }

}
