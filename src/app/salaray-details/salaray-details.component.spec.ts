import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarayDetailsComponent } from './salaray-details.component';

describe('SalarayDetailsComponent', () => {
  let component: SalarayDetailsComponent;
  let fixture: ComponentFixture<SalarayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalarayDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
