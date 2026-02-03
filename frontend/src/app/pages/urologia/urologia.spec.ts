import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Urologia } from './urologia';

describe('Urologia', () => {
  let component: Urologia;
  let fixture: ComponentFixture<Urologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Urologia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Urologia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
