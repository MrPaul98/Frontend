import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundleveltokenComponent } from './groundleveltoken.component';

describe('GroundleveltokenComponent', () => {
  let component: GroundleveltokenComponent;
  let fixture: ComponentFixture<GroundleveltokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundleveltokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundleveltokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
