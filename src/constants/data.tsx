import { IEpisode } from "../models/episodes-model"

export const PODCASTS_TO_TEST = [
    {
        id : {
            attributes: {},
            label : "1",
            
        },
        "im:image" : [
            {
                attributes : '{}',
                label:"test"
            },
            {
                attributes : '{}',
                label:"test"
            },
            {
                attributes : '{}',
                label:"test"
            },
        ]
        ,
        "im:name" : {
            label: "test"
        }
        ,
        "im:artist" : {
            label: "test"
        }
        
    },
    {
        id : {
            attributes: {},
            label : "2"
        },
        "im:image" : [
            {
                attributes : '{}',
                label:"test"
            },
            {
                attributes : '{}',
                label:"test"
            },
            {
                attributes : '{}',
                label:"test"
            },
        ],
        "im:name" : {
            label: "test"
        }
        ,
        "im:artist" : {
            label: "test"
        }
    },
    {
        id : {
            attributes: {},
            label : "3"
        },
        "im:image" : [
            {
                attributes : '{}',
                label:"test"
            },
            {
                attributes : '{}',
                label:"test"
            },
            {
                attributes : '{}',
                label:"test"
            },
        ],
        "im:name" : {
            label: "test"
        }
        ,
        "im:artist" : {
            label: "test"
        }
    }
]

export const TEST_EPISODE:IEpisode = {
    artistId: 123456789,
    artistIds: [987654321, 654321987],
    artistName: "Podcast Artist",
    artistViewUrl: "https://example.com/artist",
    artworkUrl130: "https://example.com/artwork130.jpg",
    artworkUrl160: "https://example.com/artwork160.jpg",
    artworkUrl1100: "https://example.com/artwork1100.jpg",
    artworkUrl1600: "https://example.com/artwork1600.jpg",
    collectionCensoredName: "Podcast Collection Censored Name",
    collectionExplicitness: "explicit",
    collectionHdPrice: 9.99,
    collectionId: 987654321,
    collectionName: "Podcast Collection Name",
    collectionPrice: 7.99,
    collectionViewUrl: "https://example.com/collection",
    contentAdvisoryRating: "R",
    country: "US",
    currency: "USD",
    feedUrl: "https://example.com/feed",
    genreIds: ["1234", "5678"],
    genres: ["Technology", "Podcasting"],
    kind: "podcast",
    primaryGenreName: "Technology",
    releaseDate: "2024-07-15",
    trackCensoredName: "Episode Track Censored Name",
    trackCount: 10,
    trackExplicitness: "explicit",
    trackId: 123456789,
    trackName: "Episode Track Name",
    trackPrice: 1.99,
    trackTimeMillis: 3600000,
    trackViewUrl: "https://example.com/track",
    wrapperType: "track",
    artworkUrl60: "https://example.com/artwork60.jpg",
    artworkUrl600: "https://example.com/artwork600.jpg",
    closedCaptioning: "yes",
    description: "This is the episode description.",
    episodeContentType: "audio/mpeg",
    episodeFileExtension: "mp3",
    episodeGuid: "abcd-1234-efgh-5678",
    episodeUrl: "https://example.com/episode.mp3",
    previewUrl: "https://example.com/preview.mp3",
    shortDescription: "Short description of the episode."
};