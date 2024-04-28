import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvetformComponent } from './evetform.component';

describe('EvetformComponent', () => {
  let component: EvetformComponent;
  let fixture: ComponentFixture<EvetformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvetformComponent]
    });
    fixture = TestBed.createComponent(EvetformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
