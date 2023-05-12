import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrWebsiteComponent } from './qr-website.component';

describe('QrWebsiteComponent', () => {
  let component: QrWebsiteComponent;
  let fixture: ComponentFixture<QrWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
