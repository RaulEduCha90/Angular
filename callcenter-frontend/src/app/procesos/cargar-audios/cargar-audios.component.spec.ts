import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarAudiosComponent } from './cargar-audios.component';

describe('CargarAudiosComponent', () => {
  let component: CargarAudiosComponent;
  let fixture: ComponentFixture<CargarAudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarAudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarAudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
