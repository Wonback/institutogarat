import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Neonatologia } from './neonatologia';

describe('Neonatologia', () => {
  let component: Neonatologia;
  let fixture: ComponentFixture<Neonatologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Neonatologia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Neonatologia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
