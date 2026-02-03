import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gastro } from './gastro';

describe('Gastro', () => {
  let component: Gastro;
  let fixture: ComponentFixture<Gastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
