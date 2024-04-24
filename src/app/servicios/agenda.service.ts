import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgendaModel } from '../model/agenda.model';
@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private apiURL ='http://localhost:8000/agenda/'
  constructor(private http: HttpClient) { }

  getListaAgenda(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
/* 
  getOrdenarTaresPorPrioridad(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL+'ordenar-tarea');
  }
 */

  agregarAgenda(agenda: AgendaModel): Observable<AgendaModel> {
    // return this.http.post<TareaModel>(`${this.apiURL}/agregar`,tarea);
    return this.http.post<AgendaModel>(this.apiURL+'/agregar',agenda);
  }

  editarAgenda(id: string, agenda: AgendaModel): Observable<AgendaModel> {
    return this.http.put<AgendaModel>(`${this.apiURL}/editar/${id}`,agenda);
  }

  eliminarAgenda(id: string): Observable<AgendaModel> {
    console.log(id);
    console.log(`${this.apiURL}/eliminar/${id}`);

    return this.http.delete<AgendaModel>(`${this.apiURL}/eliminar/${id}`);
  } 


  // =============  CONSULTA 1 ===========================
  getPorEstado(est: string): Observable<any> {
    // return this.http.post<TareaModel>(`${this.apiURL}/agregar`,tarea);
    return this.http.get<AgendaModel>(this.apiURL+'/por_estados/'+est);
  }

  // =============  CONSULTA 2 ===========================
  getPorEstadoUsuario(est:string ,user: string): Observable<any> {
    // return this.http.post<TareaModel>(`${this.apiURL}/agregar`,tarea);
    return this.http.get<AgendaModel>(this.apiURL+'/estado_usuario/'+est+'/'+user);
  }

// =============  CONSULTA 3 ===========================
getPorDistrito(dis: string): Observable<any> {
  // return this.http.post<TareaModel>(`${this.apiURL}/agregar`,tarea);
  return this.http.get<AgendaModel>(this.apiURL+'/por_distrito/'+dis);
}

// =============  CONSULTA 4 ===========================
getPorCosto(cos: string): Observable<any> {
  // return this.http.post<TareaModel>(`${this.apiURL}/agregar`,tarea);
  return this.http.get<AgendaModel>(this.apiURL+'/por_costo/'+cos);
}

// =============  CONSULTA 5 ===========================
getAgrupar(): Observable<any> {
  // return this.http.post<TareaModel>(`${this.apiURL}/agregar`,tarea);
  return this.http.get<AgendaModel>(this.apiURL+'/agrupar/');
}
}