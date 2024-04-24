import { Component, Directive, NgModule, Pipe } from '@angular/core';
import { AgendaService } from '../../servicios/agenda.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendaModel } from '../../model/agenda.model';

import { HeaderComponent } from '../../agenda/header/header.component';
import { SidebarComponent } from '../../agenda/sidebar/sidebar.component';
import { FooterComponent } from '../../agenda/footer/footer.component';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent,FooterComponent,FormsModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {
  listaagenda : any[] = [];
  listaagenda2 : any[] = [];
  agenda: AgendaModel;
  constructor(private AgendaServicios : AgendaService) {
    this.agenda = new AgendaModel;
  }
  ngOnInit(){
    this.getAgendas();
  }

  getAgendas(){
    this.AgendaServicios.getListaAgenda().subscribe(
      (data) => {
        this.listaagenda = data;
        console.log(this.listaagenda);
      },
      (error) => console.log(error)
    );
  }

  getPorEstado(est:string){
    const valorEstado = (document.getElementById('estado') as HTMLInputElement).value;
    
    this.AgendaServicios.getPorEstado(valorEstado).subscribe(
      (data) => {
        this.listaagenda = data;
        console.log(this.listaagenda);
      },
      (error) => console.log(error)
    );
  }

  getPorEstadoUsuario(est:string, user:string){
    const valorEstado = (document.getElementById('estado2') as HTMLInputElement).value;
    const valorUsuario = (document.getElementById('usuario') as HTMLInputElement).value;
    this.AgendaServicios.getPorEstadoUsuario(valorEstado,valorUsuario).subscribe(
      (data) => {
        this.listaagenda = data;
        console.log(this.listaagenda);
      },
      (error) => console.log(error)
    );
  }

  getPorDistrito(dis:string){
    const valorDistrito = (document.getElementById('distrito') as HTMLInputElement).value;
    this.AgendaServicios.getPorDistrito(valorDistrito).subscribe(
      (data) => {
        this.listaagenda = data;
        console.log(this.listaagenda);
      },
      (error) => console.log(error)
    );
  }
  
  getPorCosto(cos:string){
    const valorCosto = (document.getElementById('costo') as HTMLInputElement).value;
    this.AgendaServicios.getPorCosto(valorCosto).subscribe(
      (data) => {
        this.listaagenda = data;
        console.log(this.listaagenda);
      },
      (error) => console.log(error)
    );
  }
  
  getAgrupar(){
    this.AgendaServicios.getAgrupar().subscribe(
      (data) => {
        this.listaagenda = data;
        console.log(this.listaagenda);
      },
      (error) => console.log(error)
    );
  }
  
  }


