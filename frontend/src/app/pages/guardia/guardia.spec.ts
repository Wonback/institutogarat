import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guardia } from './guardia';

describe('Guardia', () => {
  let component: Guardia;
  let fixture: ComponentFixture<Guardia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guardia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guardia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
