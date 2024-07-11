import { ChangeEvent } from "react";
import { IPodcast } from "./podcasts-model";

export interface InputProps {
    filteredPodcasts : IPodcast[]
    handleFilterPodcasts : (e:ChangeEvent<HTMLInputElement>) => void
}

export interface FeedProps {
    filteredPodcasts : IPodcast[]
}