import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypealongComponent } from './typealong.component';

describe('TypealongComponent', () => {
  let component: TypealongComponent;
  let fixture: ComponentFixture<TypealongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypealongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypealongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
