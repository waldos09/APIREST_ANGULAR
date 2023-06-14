import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraseFormComponent } from './frase-form.component';

describe('FraseFormComponent', () => {
  let component: FraseFormComponent;
  let fixture: ComponentFixture<FraseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraseFormComponent]
    });
    fixture = TestBed.createComponent(FraseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
