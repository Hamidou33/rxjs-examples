import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JointureComponent} from './jointure.component';

describe('JointureComponent', () => {
  let component: JointureComponent;
  let fixture: ComponentFixture<JointureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JointureComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JointureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
