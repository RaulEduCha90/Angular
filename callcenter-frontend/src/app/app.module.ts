import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetricasComponent } from './procesos/metricas/metricas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './procesos/dashboard/dashboard.component';
import { CargarAudiosComponent } from './procesos/cargar-audios/cargar-audios.component';
import { AplicarMetricasComponent } from './procesos/aplicar-metricas/aplicar-metricas.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout.component';
import { LoginLayoutComponent } from './login-layout.component';
import { AgentesComponent } from './mantenedores/agentes/agentes.component';
import { ClientesComponent } from './mantenedores/clientes/clientes.component';

// PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    MetricasComponent,
    SidebarComponent,
    DashboardComponent,
    CargarAudiosComponent,
    AplicarMetricasComponent,
    LoginComponent,
     LoginLayoutComponent,
     MainLayoutComponent,
     ClientesComponent,
     AgentesComponent
  ],
  imports: [
    BrowserModule,
   
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PanelMenuModule,
    PanelModule,
    BrowserAnimationsModule, // <--- esto es necesario
    MenubarModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    HttpClientModule,  // ✅ <- Aquí
     ConfirmDialogModule,
    ToastModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
