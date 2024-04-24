import { Routes } from '@angular/router';
import { AgendaComponent } from './vistas/agenda/agenda.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { ConsultaComponent } from './vistas/consulta/consulta.component';


export const routes: Routes = [
    {
      path: '',
      redirectTo: 'inicio', 
      pathMatch: 'full'
    },
    
    {
      path: 'inicio',
      component:InicioComponent
    },

    {
      path: 'agenda',
      component:AgendaComponent
    },

    {
      path: 'consulta',
      component:ConsultaComponent
    },
   
    //{ path: '**', redirectTo: 'dashboard' }
  ];
  
