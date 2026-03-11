import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obstetricia } from './obstetricia';

describe('Obstetricia', () => {
  let component: Obstetricia;
  let fixture: ComponentFixture<Obstetricia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obstetricia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obstetricia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
