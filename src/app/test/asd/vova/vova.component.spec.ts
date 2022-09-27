import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VovaComponent } from './vova.component';

describe('VovaComponent', () => {
  let component: VovaComponent;
  let fixture: ComponentFixture<VovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
