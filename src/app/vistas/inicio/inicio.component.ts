import { Component, Directive, NgModule, Pipe } from '@angular/core';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from '../../agenda/header/header.component';
import { SidebarComponent } from '../../agenda/sidebar/sidebar.component';
import { FooterComponent } from '../../agenda/footer/footer.component';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent,FooterComponent,FormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
 
  }

