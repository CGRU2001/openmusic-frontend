import { ResourceType } from "../types/server.types";


/**
 * Private
 */

export interface ResourceInterface {
    contentType: ResourceType
}

/**
 * 
 * Public
 * 
 */


export interface ArtistEntityInterface extends ResourceInterface {
    readonly name: string,
    readonly nationatily: string
    readonly contentType: "artist"
}

export interface AlbumEntityInterface extends ResourceInterface {
    readonly name: string,
    readonly image: string,
    readonly artist: Partial<ArtistEntityInterface>[]
    readonly songs: Partial<SongEntityInterface>[]
    readonly contentType: "album"
}

export interface SongEntityInterface extends ResourceInterface {
    readonly name: string,
    readonly image: string,
    readonly artist: Partial<ArtistEntityInterface>[]
    readonly album: AlbumEntityInterface
    readonly contentType: "song"
}

