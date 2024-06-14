import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { AlbumsService } from '../../../../shared/service/album/albums.service';
import { crearPlayListService } from '../../service/crearPlaylist-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { playlistService } from '../../../playlist/services/playlist-service';

@Component({
  selector: 'app-listcancion',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './listcancion.component.html',
  styleUrl: './listcancion.component.css'
})
export class ListcancionComponent{
  @Input() canciones:any[]=[] 
  @Input() token:any
  @Input() playlistRecibido:any
  private router: Router = new Router;
  listaCancion: any[]=[]; 
  nombrePlaylistCrear:string=""


  playlistSeleccionado: string = '';
  nombrePlaylistActualizar: string = '';
  idPlaylistActualizar: string = '';


  constructor(private musicService:AlbumsService,private playlistService:crearPlayListService,private playlistServ:playlistService){}

  playCancion(cancion: any) { 
   this.musicService.setCancion(cancion)
   this.playlistServ.changeData(cancion)
  }
  seleccionCancion(cancion:any,event: any){ 
    if (event.target.checked) {
      this.listaCancion.push(cancion);
    } else {
      this.listaCancion = this.listaCancion.filter(t => t.nombre !== cancion.nombre);
    } 
  }



  async crearPlaylist(){
      try {
        await this.playlistService.createPlaylist(this.nombrePlaylistCrear,this.listaCancion,this.token).toPromise()
        this.limpiar()
      } catch (error) {
        console.log("Error al crear la lista",error)
      }
  }
  datosSelect():void{
    const selectedPaylist=this.playlistRecibido.find((playlist:any)=>playlist._id===this.playlistSeleccionado)
    if(selectedPaylist){
      this.nombrePlaylistActualizar=selectedPaylist.nombre
      this.idPlaylistActualizar=selectedPaylist._id
    }
  }
  async actualizarPlaylist(){ 
      try {
        await this.playlistService.actualizarPlaylist(this.nombrePlaylistActualizar,this.listaCancion,this.token,this.idPlaylistActualizar).toPromise()
       this.limpiar()
      } catch (error) {
        console.log("Error al actualizar la lista",error)
      }
  }



  validarNombrePlaylist(): boolean {
    const caracteresAceptados = /^[a-zA-Z0-9\s]+$/;
    return caracteresAceptados.test(this.nombrePlaylistCrear.trim());
  }
  validarNombrePlaylist2(): boolean {
    const caracteresAceptados = /^[a-zA-Z0-9\s]+$/;
    return caracteresAceptados.test(this.nombrePlaylistActualizar.trim());
  }
  limpiarCheckBox() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      (checkbox as HTMLInputElement).checked = false;
    });
  }
  limpiar(){
    this.listaCancion=[] 
    this.limpiarCheckBox();
    this.router.navigate(['/playlist']);
  }
}
