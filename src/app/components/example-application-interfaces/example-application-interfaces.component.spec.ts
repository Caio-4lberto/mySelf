import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleApplicationInterfacesComponent } from './example-application-interfaces.component';

describe('ExampleApplicationInterfacesComponent', () => {
  let component: ExampleApplicationInterfacesComponent;
  let fixture: ComponentFixture<ExampleApplicationInterfacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleApplicationInterfacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleApplicationInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
