import { Component, Directive, NgModule, Pipe } from '@angular/core';
import { AgendaService } from '../../servicios/agenda.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendaModel } from '../../model/agenda.model';

import { HeaderComponent } from '../../agenda/header/header.component';
import { SidebarComponent } from '../../agenda/sidebar/sidebar.component';
import { FooterComponent } from '../../agenda/footer/footer.component';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent,FooterComponent,FormsModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {
  listaagenda : any[] = [];
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
/* 
  getTareasPorPrioridad(){
    this.tareaServicios.getOrdenarTaresPorPrioridad().subscribe(
      (data) => {
        this.listaTareas = data;
        console.log(this.listaTareas);
      },
      (error) => console.log(error)
    );
  } */

  agregarAgenda(){
    console.log('estamoa adentro');
     if (this.agenda._id == null || this.agenda._id == ''){
        //agregar
        this.AgendaServicios.agregarAgenda(this.agenda).subscribe(
          (data: AgendaModel) => {
            console.log("Agenda agregada:", data);
            this.getAgendas();
          },
          (error) => console.log(error)
        );
    } else {
      this.AgendaServicios.editarAgenda(this.agenda._id,this.agenda).subscribe(
        (data: AgendaModel) => {
          console.log("Agenda editada:", data);
          this.getAgendas();
        },
        (error) => console.log(error)
      );
    } 

    //editar
  }

  editarAgenda(item : AgendaModel){
    console.log(item);
    this.agenda = item;
  }
  
  eliminarAgenda(item : AgendaModel){
    this.AgendaServicios.eliminarAgenda(item._id).subscribe(
      (data: AgendaModel) => {
        console.log("Agenda eliminado:", data);
        this.getAgendas();
      },
      (error) => console.log(error)
    );
  } 
}