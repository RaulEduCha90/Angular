import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteDialog: boolean = false;
  cliente: Cliente = this.getEmptyCliente();
  submitted: boolean = false;
  isEdit: boolean = false;

  constructor(private clienteService: ClienteService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.loadClientes();
  }

  loadClientes() {
    this.clienteService.getAll().subscribe(data => this.clientes = data);
  }

  openNew() {
    this.cliente = this.getEmptyCliente();
    this.submitted = false;
    this.clienteDialog = true;
    this.isEdit = false;
  }

  editCliente(cliente: Cliente) {
    this.cliente = { ...cliente };
    this.clienteDialog = true;
    this.isEdit = true;
  }

  /*
  deleteCliente(cliente: Cliente) {
    if (cliente.id_cliente) {
      this.clienteService.delete(cliente.id_cliente).subscribe(() => this.loadClientes());
    }
  }
    */

  saveCliente() {
    this.submitted = true;
    if (this.isEdit && this.cliente.id_cliente) {
      this.clienteService.update(this.cliente.id_cliente, this.cliente).subscribe(() => {
        this.loadClientes();
        this.clienteDialog = false;
      });
    } else {
      this.clienteService.create(this.cliente).subscribe(() => {
        this.loadClientes();
        this.clienteDialog = false;
      });
    }
  }

  getEmptyCliente(): Cliente {
    return {
      nombre: '',
      edad: undefined,
      genero: '',
      ubicacion: '',
      nivel_socioeconomico: '',
      profesion: '',
      nivel_educativo: '',
      historial_crediticio: undefined,
      ingresos: undefined,
    };
  }


  deleteClienteConfirm(cliente: any) {
    this.confirmationService.confirm({
      message: `¿Estás seguro de que deseas eliminar a "${cliente.nombre}"?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.clienteService.delete(cliente.id_cliente).subscribe(() => {
          this.loadClientes(); // recargar lista
        });
      }
    });
  }
}
