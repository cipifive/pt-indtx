export const GET_PODCASTS = `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`

export const GET_PODCAST_BY_ID = (id:string) => `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`