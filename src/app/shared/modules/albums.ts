export interface Album{
    _id:string
    nombre:string
    total:number
    image:string
    fecha:string
    artista:Artista
    cancion:Cancion[]
}
export interface Artista{
    imagen:string
    nombre:string
}
export interface Cancion{
    tiempo:string
    nombre:string
    url:string
    reproducciones:number
}