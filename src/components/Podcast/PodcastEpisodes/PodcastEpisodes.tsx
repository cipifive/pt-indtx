import { FC } from "react"
import { EpisodesCount } from "./EpisodesCount"
import { EpisodesTable } from "./EpisodesTable"
import { PodcastEpisodesProps } from "../../../models/props-model"

export const PodcastEpisodes:FC<PodcastEpisodesProps> = (props) => {

    const {
        episodes
    } = props

    return (
        <div className="flex flex-col justify-between w-8/12 ">
                <EpisodesCount count={episodes.length} />
                <EpisodesTable episodes={episodes} />
            </div>
    )
}