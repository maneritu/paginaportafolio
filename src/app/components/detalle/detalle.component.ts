import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent {
  producto:any = undefined;
  anio:number = new Date().getFullYear();
  codigo:string = undefined;

  constructor( private route:ActivatedRoute,
               private _ps:ProductosService
              )
  {
    route.params.subscribe(
      parametros =>
      {
        //console.log(parametros);
        //console.log(parametros['id']);
        this.codigo = parametros['id'];
        _ps.cargar_producto( parametros['id'] )
          .subscribe(
            res =>
            {
              this.producto = res;
              //console.log( this.producto );
            }
          )
      }
    )
  }

}
