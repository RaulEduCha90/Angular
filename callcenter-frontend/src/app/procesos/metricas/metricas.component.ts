import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metricas',
  templateUrl: './metricas.component.html',
  styleUrls: ['./metricas.component.scss']
})
export class MetricasComponent implements OnInit {
    metricas: any[] = [];
  formMetrica!: FormGroup;
  dialogoVisible = false;
  editar = false;
  busqueda = '';

  estados = [
    { label: 'Activo', value: 'Activo' },
    { label: 'Inactivo', value: 'Inactivo' }
  ];

  metricaSeleccionada: any;

  constructor(private fb: FormBuilder,
    private router: Router) {
  this.router.navigate(['/metricas']); // ⚠️ Esto redirigiría a '/'
}

 // constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formMetrica = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      peso: ['', [Validators.required, Validators.min(1)]],
      estado: ['', Validators.required]
    });

    this.metricas = [
      { id: '001', nombre: 'Saludo Inicial', descripcion: 'Protocolo de saludo', peso: 15, estado: 'Activo' },
      { id: '002', nombre: 'Verificación de Datos', descripcion: 'Verificación de info', peso: 12, estado: 'Activo' },
      { id: '003', nombre: 'Tono de Voz', descripcion: 'Evaluación del tono', peso: 18, estado: 'Activo' },
      { id: '004', nombre: 'Empatía', descripcion: 'Comprensión empática', peso: 14, estado: 'Inactivo' }
    ];
  }

  abrirDialogo() {
    this.editar = false;
    this.dialogoVisible = true;
    this.formMetrica.reset();
  }

  editarMetrica(metrica: any) {
    this.editar = true;
    this.dialogoVisible = true;
    this.metricaSeleccionada = metrica;
    this.formMetrica.patchValue(metrica);
  }

  guardarMetrica() {
    if (this.formMetrica.invalid) return;

    const nuevaMetrica = this.formMetrica.value;
    if (this.editar) {
      Object.assign(this.metricaSeleccionada, nuevaMetrica);
    } else {
      const nuevoId = String(this.metricas.length + 1).padStart(3, '0');
      this.metricas.push({ id: nuevoId, ...nuevaMetrica });
    }

    this.dialogoVisible = false;
  }

  eliminarMetrica(metrica: any) {
    this.metricas = this.metricas.filter(m => m !== metrica);
  }
}
