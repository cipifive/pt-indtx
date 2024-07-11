import { FC } from "react"
import { IPodcast } from "../../models/podcasts-model"
import { FeedProps } from "../../models/props-model"

export const PodcastFeed:FC<FeedProps> = (props):JSX.Element => {

    const {
        filteredPodcasts
    } = props
    
    return (
        <div className="grid grid-cols-4 gap-x-8 gap-y-44 h-5/6 p-12 pt-20 ">
            {
                filteredPodcasts?.map((podcast:IPodcast) => {
                    return (
                        <div key={podcast.id.attributes['im:id']} className="h-40 flex items-end justify-center relative border border-gray-200 rounded-lg shadow-md lg:max-w-md p-2 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                            <img className="rounded-full top-[-100px] absolute border border-slate-300" src={podcast['im:image'][2].label} />
                            <div className="flex flex-col justify-center items-center">
                                <span className="font-bold text-sm text-center">{podcast['im:name'].label.toUpperCase()}</span>
                                    <span className="font-normal text-sm text-center">Author: {podcast['im:artist'].label}</span>
                            </div>
                        </div>
                    )
                })
             }
         </div>
    )
}