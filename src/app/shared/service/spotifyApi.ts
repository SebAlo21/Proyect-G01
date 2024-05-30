import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn:'root'
})
export class spotifyService{
   clientID=environment.clientId
   clientSecret =environment.clientSecret

    async spotifyToken():Promise<any>{
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic '+btoa(this.clientID+':'+this.clientSecret),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });
        if (!response.ok) {
            throw new Error('Fallo al conseguir Token');
        }
        const data = await response.json();
        return data.access_token;
    }
    async cargarAlbum(token:string):Promise<any>{
        // const features="https://api.spotify.com/v1/browse/featured-playlists";
        const result=await fetch(`https://api.spotify.com/v1/browse/new-releases?limit=40&offset=0`,{
          method:'GET',
          headers:{'Authorization': `Bearer ${token}`}
        })
        const data=await result.json();
        return data.albums.items 
    }



    async cargarGeneros(token:string):Promise<any>{
        
        const result=await fetch(`https://api.spotify.com/v1/browse/categories
        `,{
          method:'GET',
          headers:{'Authorization': `Bearer ${token}`}
        })
        const data=await result.json();
        return data.categories.items
        
    }


}