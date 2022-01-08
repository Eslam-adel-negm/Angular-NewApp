import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEnComponent } from './details-en.component';

describe('DetailsEnComponent', () => {
  let component: DetailsEnComponent;
  let fixture: ComponentFixture<DetailsEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
