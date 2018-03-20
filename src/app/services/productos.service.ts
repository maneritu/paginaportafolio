import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductosService
{
  productos:any = [];
  productos_filtrados:any[] = [];
  cargando_productos:boolean = true;


  constructor( private http:HttpClient )
  {
    this.cargar_productos();
  }

  public buscarProductos(termino:string)
  {
    //console.log('Buscando productos...');
    //console.log(this.productos.length);

    if(this.productos.length == 0)
    {
      this.cargar_productos().then(() => {
        //termino la carga
        this.filtrar_productos(termino);
      });

    }
    else
    {
      this.filtrar_productos(termino);
    }

  }

  private filtrar_productos( termino:string)
  {
    this.productos_filtrados = [];
    termino = termino.toLowerCase();

    this.productos.forEach(
      prod =>
      {
        if(prod.categoria.toLowerCase().indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0)
        {
          this.productos_filtrados.push(prod);
          //console.log(prod);
        }


      }
    );
  }

  public cargar_producto(cod:string){
    return this.http.get(`https://egresis-1982.firebaseio.com/productos/${ cod }.json`)
  }

  public cargar_productos()
  {
    this.cargando_productos= true;
    let promesa = new Promise( (resolve, reject) => {
      this.http.get('https://egresis-1982.firebaseio.com/productos_idx.json')
        .subscribe(
          res => {
            //console.log(res.json());
            //setTimeout(() => {
            this.cargando_productos = false;
            this.productos = res;
            //}, 1000);
            resolve();
          }
        );
      });
    return promesa;
  }

}
