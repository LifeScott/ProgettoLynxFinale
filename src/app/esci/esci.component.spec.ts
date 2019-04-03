import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsciComponent } from './esci.component';

describe('EsciComponent', () => {
  let component: EsciComponent;
  let fixture: ComponentFixture<EsciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
