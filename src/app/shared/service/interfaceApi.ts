export interface Album{
    name:string
    id:string
    images:Image[]
    artists:Artista[]
    release_date:string
    total_tracks:string
}

export interface Artista{
    name:string
    id:string
    
}
export interface Image{
    url:string
}