import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingPageComponent } from './sorting-page.component';

describe('SortingPageComponent', () => {
  let component: SortingPageComponent;
  let fixture: ComponentFixture<SortingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortingPageComponent]
    });
    fixture = TestBed.createComponent(SortingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
