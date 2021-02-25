import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedSalsaComponent } from './red-salsa.component';

describe('RedSalsaComponent', () => {
  let component: RedSalsaComponent;
  let fixture: ComponentFixture<RedSalsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedSalsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedSalsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
