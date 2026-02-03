import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Traumatologia } from './traumatologia';

describe('Traumatologia', () => {
  let component: Traumatologia;
  let fixture: ComponentFixture<Traumatologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Traumatologia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Traumatologia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
