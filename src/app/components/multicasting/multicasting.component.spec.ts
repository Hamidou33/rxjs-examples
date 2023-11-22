import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MulticastingComponent} from './multicasting.component';

describe('MulticastingComponent', () => {
  let component: MulticastingComponent;
  let fixture: ComponentFixture<MulticastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MulticastingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MulticastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
