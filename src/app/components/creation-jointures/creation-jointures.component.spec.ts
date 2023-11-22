import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreationJointuresComponent} from './creation-jointures.component';

describe('CreationJointuresComponent', () => {
  let component: CreationJointuresComponent;
  let fixture: ComponentFixture<CreationJointuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationJointuresComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreationJointuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
