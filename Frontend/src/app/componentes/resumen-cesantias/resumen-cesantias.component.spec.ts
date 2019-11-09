import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenCesantiasComponent } from './resumen-cesantias.component';

describe('ResumenCesantiasComponent', () => {
  let component: ResumenCesantiasComponent;
  let fixture: ComponentFixture<ResumenCesantiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenCesantiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenCesantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
