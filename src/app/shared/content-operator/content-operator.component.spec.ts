import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOperatorComponent } from './content-operator.component';

describe('ContentOperatorComponent', () => {
  let component: ContentOperatorComponent;
  let fixture: ComponentFixture<ContentOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentOperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
