import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaEstruturalComponent } from './directiva-estrutural.component';

describe('DirectivaEstruturalComponent', () => {
  let component: DirectivaEstruturalComponent;
  let fixture: ComponentFixture<DirectivaEstruturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaEstruturalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaEstruturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
