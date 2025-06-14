import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargar-audios',
  templateUrl: './cargar-audios.component.html',
  styleUrls: ['./cargar-audios.component.scss']
})
export class CargarAudiosComponent implements OnInit {



    archivos: any[] = [];
  archivosProcesadosHoy: number = 0;

  constructor() { }

  ngOnInit(): void {
     // Simular carga de datos desde una API o servicio
    this.archivos = [
      { nombre: 'llamada_ejemplo_001.mp3', completado: true },
      { nombre: 'llamada_ejemplo_002.wav', completado: false }
    ];

    this.archivosProcesadosHoy = 47;
  }

}
