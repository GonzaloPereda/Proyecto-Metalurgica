import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarandasComponent } from './barandas.component';

describe('BarandasComponent', () => {
  let component: BarandasComponent;
  let fixture: ComponentFixture<BarandasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarandasComponent]
    });
    fixture = TestBed.createComponent(BarandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
