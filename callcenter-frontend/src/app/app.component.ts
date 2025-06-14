import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'callcenter-frontend';



    items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: '/dashboard',
      },
      {
        label: 'Carga de Audios',
        icon: 'pi pi-upload',
        routerLink: '/cargar-audios',
      },
      {
        label: 'Aplicar Métricas',
        icon: 'pi pi-cog',
        routerLink: '/aplicar-metricas',
      },
      {
        label: 'Gestión de Métricas',
        icon: 'pi pi-chart-line',
        routerLink: '/metricas',
      },
    ];
  }
}
