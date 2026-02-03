import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hemodinamia } from './hemodinamia';

describe('Hemodinamia', () => {
  let component: Hemodinamia;
  let fixture: ComponentFixture<Hemodinamia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hemodinamia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hemodinamia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
