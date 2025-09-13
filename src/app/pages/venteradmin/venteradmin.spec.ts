import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Venteradmin } from './venteradmin';

describe('Venteradmin', () => {
  let component: Venteradmin;
  let fixture: ComponentFixture<Venteradmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Venteradmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Venteradmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
