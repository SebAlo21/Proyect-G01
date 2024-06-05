import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCancionComponent } from './search-cancion.component';

describe('SearchCancionComponent', () => {
  let component: SearchCancionComponent;
  let fixture: ComponentFixture<SearchCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCancionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
