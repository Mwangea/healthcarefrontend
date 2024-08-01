import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDrComponent } from './find-dr.component';

describe('FindDrComponent', () => {
  let component: FindDrComponent;
  let fixture: ComponentFixture<FindDrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindDrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
