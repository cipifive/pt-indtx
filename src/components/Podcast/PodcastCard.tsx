import { FC } from "react";
import { useLocation } from "react-router-dom";
import { PodcastCardProps } from "../../models/props-model";

export const PodcastCard:FC<PodcastCardProps> = (props):JSX.Element => {

    const {
        episode,
        callback
    } = props

    const location = useLocation()
    
    return (
        <div className="flex flex-col w-3/12 bg-white h-[550px] w-[350px] p-4 border border-gray-200 rounded-lg shadow-md lg:max-w-md">
            <div className="flex justify-center items-center h-1/2 border-b-2">
                <img className={`${callback? 'cursor-pointer' : ''}`} onClick={callback} src={episode?.artworkUrl600} width={225} />
            </div>
            <div className="flex flex-col h-1/2">
                <div className="flex flex-col justify-center items-start border-b-2 flex-1 ">
                    <span data-testid="collection-card" className="font-bold">{episode?.collectionName}</span>
                    <span onClick={callback} className={`${callback? 'cursor-pointer' : ''} font-normal`}>by {episode?.artistName}</span>
                </div>
                <div className="flex flex-col justify-center items-start flex-2  ">
                    <span className="font-bold">Description</span>
                    <span title={location?.state?.description} className="font-normal">{location?.state?.description.length > 275 ? location?.state?.description.slice(0, 275) + '...' : location?.state?.description}</span>
                </div>
            </div>
            
        </div>
    )
}