export interface ILinkAttributes {
    rel : string
    href : string
    type : string
}

export interface IPodcastLink {
    attributes : ILinkAttributes
}

export interface IReleaseDateAttributes {
    label : string
}

export interface IPodcastReleaseDate {
    attributes : IReleaseDateAttributes
    label : string
}

export interface IPriceAttributes {
    amount : string
    currency : string
}

export interface IPodcastPrice {
    attributes : IPriceAttributes
    label : string
}

export interface IPodcastLabel {
    label : string
}

export interface IImagesAttributes {
    height : string
}

export interface IPodcastImages {
    attributes : IImagesAttributes
    label : string
}

export interface IContentTypeAttributes {
    term : string,
    label : string
}

export interface IPodcastContentType {
    attributes : IContentTypeAttributes
}

export interface IArtistAttributes {
    href : string
}

export interface IPodcastArtist {
    attributes : IArtistAttributes
    label : string
}

export interface IIDAttributes {
    "im:id" : string
}

export interface IPodcastID {
    attributes : IIDAttributes
    label : string
}

export interface ICategoryAttributes {
    "im:image" : string
    label : string
    scheme : string
    term : string
}

export interface IPodcastCategory {
    attributes : ICategoryAttributes
}

export interface IPodcast {
    category : IPodcastCategory
    id : IPodcastID
    "im:artist" : IPodcastArtist
    "im:contentType" : IPodcastContentType
    "im:image" : IPodcastImages[]
    "im:name" : IPodcastLabel
    "im:price" : IPodcastPrice
    "im:releaseDate" : IPodcastReleaseDate
    link : IPodcastLink
    rights : IPodcastLabel
    summary : IPodcastLabel
    title : IPodcastLabel
}

export interface IStoredPodcasts {
    items : IPodcast[]
    registered_at : string
}

