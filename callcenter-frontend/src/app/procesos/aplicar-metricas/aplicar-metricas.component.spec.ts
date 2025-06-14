import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicarMetricasComponent } from './aplicar-metricas.component';

describe('AplicarMetricasComponent', () => {
  let component: AplicarMetricasComponent;
  let fixture: ComponentFixture<AplicarMetricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicarMetricasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicarMetricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
