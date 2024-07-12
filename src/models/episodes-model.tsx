
interface Genre {
    name: string;
    id: string;
  }

export interface IEpisode {
    artistId : number
    artistIds? : number[]
    artistName : string
    artistViewUrl : string
    artworkUrl130 : string
    artworkUrl160 : string
    artworkUrl1100 : string
    artworkUrl1600 : string
    collectionCensoredName : string
    collectionExplicitness : string
    collectionHdPrice : number
    collectionId : number
    collectionName : string
    collectionPrice : number
    collectionViewUrl : string
    contentAdvisoryRating : string
    country : string
    currency : string
    feedUrl : string
    genreIds : string[]
    genres : string[] | Genre[]
    kind : string
    primaryGenreName : string
    releaseDate : string
    trackCensoredName : string
    trackCount : number
    trackExplicitness : string
    trackId : number
    trackName : string
    trackPrice : number
    trackTimeMillis : number
    trackViewUrl : string
    wrapperType : string
    artworkUrl60: string
    artworkUrl600: string
    closedCaptioning: string
    description: string
    episodeContentType: string
    episodeFileExtension: string
    episodeGuid: string
    episodeUrl: string
    previewUrl: string
    shortDescription: string
}