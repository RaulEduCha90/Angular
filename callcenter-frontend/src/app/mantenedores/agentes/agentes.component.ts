import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Agente } from 'src/app/models/agente.model copy';
import { AgenteService } from 'src/app/services/agente.service';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AgentesComponent implements OnInit {
    agentes: Agente[] = [];
    agenteDialog: boolean = false;
    agente: Agente = this.getEmptyAgente();
    submitted: boolean = false;
    isEdit: boolean = false;
  
    constructor(private agenteService: AgenteService,
      private confirmationService: ConfirmationService) {}
  
    ngOnInit() {
      this.loadAgentes();
    }
  
    loadAgentes() {
      this.agenteService.getAll().subscribe(data => this.agentes = data);
    }
  
    openNew() {
      this.agente = this.getEmptyAgente();
      this.submitted = false;
      this.agenteDialog = true;
      this.isEdit = false;
    }
  
    editAgente(cliente: Agente) {
      this.agente = { ...cliente };
      this.agenteDialog = true;
      this.isEdit = true;
    }
  /*
    deleteAgente(cliente: Agente) {
      if (cliente.id_agente) {
        this.agenteService.delete(cliente.id_agente).subscribe(() => this.loadAgentes());
      }
    }
      */
  
    saveAgente() {
      this.submitted = true;
      if (this.isEdit && this.agente.id_agente) {
        this.agenteService.update(this.agente.id_agente, this.agente).subscribe(() => {
          this.loadAgentes();
          this.agenteDialog = false;
        });
      } else {
        this.agenteService.create(this.agente).subscribe(() => {
          this.loadAgentes();
          this.agenteDialog = false;
        });
      }
    }
  
    getEmptyAgente(): Agente {
      return {
        nombre: '',
        habilidades: '',
        turno: '',
    
      };
    }

     deleteAgenteConfirm(agente: any) {
    this.confirmationService.confirm({
      message: `¿Estás seguro de que deseas eliminar a "${agente.nombre}"?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.agenteService.delete(agente.id_agente).subscribe(() => {
          this.loadAgentes(); // recargar lista
        });
      }
    });
  }
  }
  