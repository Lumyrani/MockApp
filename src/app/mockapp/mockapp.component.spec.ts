import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockappComponent } from './mockapp.component';

describe('MockappComponent', () => {
  let component: MockappComponent;
  let fixture: ComponentFixture<MockappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
