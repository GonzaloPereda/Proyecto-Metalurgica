import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpoteComponent } from './ppote.component';

describe('PpoteComponent', () => {
  let component: PpoteComponent;
  let fixture: ComponentFixture<PpoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PpoteComponent]
    });
    fixture = TestBed.createComponent(PpoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
