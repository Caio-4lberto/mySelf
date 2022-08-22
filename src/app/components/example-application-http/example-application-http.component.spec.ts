import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleApplicationHttpComponent } from './example-application-http.component';

describe('ExampleApplicationHttpComponent', () => {
  let component: ExampleApplicationHttpComponent;
  let fixture: ComponentFixture<ExampleApplicationHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleApplicationHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleApplicationHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
