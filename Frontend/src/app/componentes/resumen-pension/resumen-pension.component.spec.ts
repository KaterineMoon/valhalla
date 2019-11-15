import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPensionComponent } from './resumen-pension.component';

describe('ResumenPensionComponent', () => {
  let component: ResumenPensionComponent;
  let fixture: ComponentFixture<ResumenPensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenPensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
