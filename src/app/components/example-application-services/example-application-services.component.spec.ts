import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleApplicationServicesComponent } from './example-application-services.component';

describe('ExampleApplicationServicesComponent', () => {
  let component: ExampleApplicationServicesComponent;
  let fixture: ComponentFixture<ExampleApplicationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleApplicationServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleApplicationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
