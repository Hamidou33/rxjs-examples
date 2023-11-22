import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UtilitairesComponent} from './utilitaires.component';

describe('UtilitairesComponent', () => {
  let component: UtilitairesComponent;
  let fixture: ComponentFixture<UtilitairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilitairesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UtilitairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
