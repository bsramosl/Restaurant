import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashmenuComponent } from './dashmenu.component';

describe('DashmenuComponent', () => {
  let component: DashmenuComponent;
  let fixture: ComponentFixture<DashmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashmenuComponent]
    });
    fixture = TestBed.createComponent(DashmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
