import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionSheetComponent } from './prediction-sheet.component';

describe('PredictionSheetComponent', () => {
  let component: PredictionSheetComponent;
  let fixture: ComponentFixture<PredictionSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
