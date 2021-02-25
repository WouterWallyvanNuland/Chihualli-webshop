import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowSalsaComponent } from './yellow-salsa.component';

describe('YellowSalsaComponent', () => {
  let component: YellowSalsaComponent;
  let fixture: ComponentFixture<YellowSalsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowSalsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowSalsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
