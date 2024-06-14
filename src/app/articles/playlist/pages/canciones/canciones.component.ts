import { Component, Input, OnInit} from '@angular/core'; 
import { playlistService } from '../../services/playlist-service'; 
import { AlbumsService } from '../../../../shared/service/album/albums.service'; 


@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent implements OnInit  {
  @Input() playlistSeleccionada:any   

  constructor(private musicService:AlbumsService, private playlistService:playlistService){}
 
  ngOnInit(): void {  
  }
  playCancion(cancion: any) { 
    this.musicService.setCancion(cancion) 
    this.playlistService.changeData(cancion)
  }
  formatearFecha(fecha: string | null): string {
    if (!fecha) {
      return ''; 
    }
    const fechaFormato = new Date(fecha);
    const fechaFormateada = fechaFormato.toLocaleDateString('es-ES', {
      year: 'numeric',month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'
    });
    return fechaFormateada;
  }
 
}
