import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsServicesComponent } from './us-services.component';

describe('UsServicesComponent', () => {
  let component: UsServicesComponent;
  let fixture: ComponentFixture<UsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
