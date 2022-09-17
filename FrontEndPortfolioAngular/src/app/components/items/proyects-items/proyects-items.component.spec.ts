import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsItemsComponent } from './proyects-items.component';

describe('ProyectsItemsComponent', () => {
  let component: ProyectsItemsComponent;
  let fixture: ComponentFixture<ProyectsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectsItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
