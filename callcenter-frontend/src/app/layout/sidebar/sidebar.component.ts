import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

   items: MenuItem[] = [];

  ngOnInit(): void {
        this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: ['/dashboard']
      },
      {
        label: 'Cargar Audios',
        icon: 'pi pi-upload',
        routerLink: ['/cargar-audios']
      },
      {
        label: 'Aplicar Métricas',
        icon: 'pi pi-sliders-h',
        routerLink: ['/aplicar-metricas']
      },
      {
        label: 'Gestión de Métricas',
        icon: 'pi pi-cog',
        routerLink: ['/metricas']
      }
    ];
  }

}
