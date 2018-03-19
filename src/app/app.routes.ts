import { RouterModule, Routes } from '@angular/router';

/*import { PrincipalComponent, NosotrosComponent, DetalleComponent} from './components/index.paginas';*/

import { PrincipalComponent } from './components/principal/principal.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ContactenosComponent} from './components/contactenos/contactenos.component';

const app_routes: Routes = [
  { path : 'home', component : PrincipalComponent},
  { path : 'nosotros/about', component : NosotrosComponent},
  { path : 'producto', component : DetalleComponent },
  { path : 'contactenos', component : ContactenosComponent},
  { path : '**', pathMatch : 'prefix', redirectTo : 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
