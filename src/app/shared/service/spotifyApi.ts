import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class spotifyService{
    clientId = 'cb2143879a564de7a8ffed71fbeeed21';
    clientSecret = 'cb62067e5ea94222bab7d4eb98f57cd1';

    async spotifyToken():Promise<any>{
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic '+btoa(this.clientId+':'+this.clientSecret),
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
        const features="https://api.spotify.com/v1/browse/featured-playlists";
        const result=await fetch(`https://api.spotify.com/v1/browse/new-releases?limit=40&offset=0`,{
          method:'GET',
          headers:{'Authorization': `Bearer ${token}`}
        })
        const data=await result.json();
        return data.albums.items 
    }
}