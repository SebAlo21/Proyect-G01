import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCancionComponent } from './album-cancion.component';

describe('AlbumCancionComponent', () => {
  let component: AlbumCancionComponent;
  let fixture: ComponentFixture<AlbumCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumCancionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
