import { FC } from "react";
import { InputProps } from "../../models/props-model";

export const PodcastInput:FC<InputProps> = (props) => {

    const {
        filteredPodcasts,
        handleFilterPodcasts
    } = props
    return (
        <div className="flex justify-end items-center pr-4 h-1/6 w-full">
            <span className="flex justify-center items-center bg-blue-titles font-bold p-2 rounded text-white w-12 mr-4">{filteredPodcasts.length}</span>
            <input onChange={handleFilterPodcasts} className=" font-normal p-4 border w-1/6 " placeholder="Filter podcasts..." type="text" />
        </div>
    )
}