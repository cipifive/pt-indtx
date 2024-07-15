import { ChangeEvent } from "react";
import { IPodcast } from "./podcasts-model";
import { IEpisode } from "./episodes-model";

export interface InputProps {
    filteredPodcasts : IPodcast[]
    handleFilterPodcasts : (e:ChangeEvent<HTMLInputElement>) => void
}

export interface FeedProps {
    filteredPodcasts : IPodcast[]
}

export interface PodcastCardProps {
    episode : IEpisode
    callback? : () => void
}

export interface PodcastEpisodesProps {
    episodes : IEpisode[]
}

export interface EpisodesCountProps {
    count : number
}

export interface IErrorBoundaryProps {
    error: Error
    resetErrorBoundary: () => void
}