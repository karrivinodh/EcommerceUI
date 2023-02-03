import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vendorLoginComponent } from './vendorlogin.component';

describe('VendorloginComponent', () => {
  let component: vendorLoginComponent;
  let fixture: ComponentFixture<vendorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ vendorLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(vendorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
