import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricasComponent } from './procesos/metricas/metricas.component';
import { AplicarMetricasComponent } from './procesos/aplicar-metricas/aplicar-metricas.component';
import { CargarAudiosComponent } from './procesos/cargar-audios/cargar-audios.component';
import { DashboardComponent } from './procesos/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout.component';
import { LoginLayoutComponent } from './login-layout.component';
import { ClientesComponent } from './mantenedores/clientes/clientes.component';
import { AgentesComponent } from './mantenedores/agentes/agentes.component';

//const routes: Routes = [];

/*

const routes: Routes = [
  { path: '', redirectTo: 'metricas', pathMatch: 'full' },
  { path: 'metricas', component: MetricasComponent }
];

*/




const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'metricas', component: MetricasComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cargar-audios', component: CargarAudiosComponent },
      { path: 'aplicar-metricas', component: AplicarMetricasComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'agentes', component: AgentesComponent },
      // más rutas aquí
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', redirectTo: 'login' }
  
  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
