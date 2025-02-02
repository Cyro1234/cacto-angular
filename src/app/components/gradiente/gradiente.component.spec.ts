import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradienteComponent } from './gradiente.component';

describe('GradienteComponent', () => {
  let component: GradienteComponent;
  let fixture: ComponentFixture<GradienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
