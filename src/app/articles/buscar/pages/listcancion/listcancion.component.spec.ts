import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcancionComponent } from './listcancion.component';

describe('ListcancionComponent', () => {
  let component: ListcancionComponent;
  let fixture: ComponentFixture<ListcancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListcancionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListcancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
