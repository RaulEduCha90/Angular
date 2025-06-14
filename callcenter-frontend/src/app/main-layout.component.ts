import { Component } from "@angular/core";

@Component({
  selector: 'app-main-layout',
  template: `
    <app-sidebar></app-sidebar>   <!-- Tu barra de navegación -->
    <router-outlet></router-outlet> <!-- Aquí van los demás componentes -->
  `
})
export class MainLayoutComponent {}
